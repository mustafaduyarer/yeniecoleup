import {
  BadRequestException,
  InternalServerErrorException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { ROLES, type Role } from '../common/constants/roles';
import { verifyFirebaseIdToken } from './firebase-admin';

type LoginResult = {
  user: {
    uid: string;
    email: string | null;
    name: string | null;
    picture: string | null;
    emailVerified: boolean;
  };
  claims: {
    role: Role;
    tenantId: string;
    permissions: string[];
  };
  token: {
    expiresAt: number | null;
  };
};

@Injectable()
export class AuthService {
  async loginWithFirebaseToken(idToken: string): Promise<LoginResult> {
    if (!idToken || typeof idToken !== 'string') {
      throw new BadRequestException('idToken is required');
    }

    let decodedToken: DecodedIdToken;

    try {
      decodedToken = await verifyFirebaseIdToken(idToken);
    } catch (error) {
      const message = error instanceof Error ? error.message : '';

      if (message.includes('Firebase Admin credentials are missing')) {
        throw new InternalServerErrorException(
          'Firebase Admin is not configured on backend.',
        );
      }

      throw new UnauthorizedException(message || 'Invalid Firebase ID token');
    }

    const role = this.getRoleFromClaims(decodedToken);
    const tenantId = this.getTenantIdFromClaims(decodedToken);
    const permissions = this.getPermissionsFromClaims(decodedToken);

    return {
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email ?? null,
        name: decodedToken.name ?? null,
        picture: decodedToken.picture ?? null,
        emailVerified: decodedToken.email_verified ?? false,
      },
      claims: {
        role,
        tenantId,
        permissions,
      },
      token: {
        expiresAt: decodedToken.exp ? decodedToken.exp * 1000 : null,
      },
    };
  }

  private getRoleFromClaims(decodedToken: DecodedIdToken): Role {
    const role = decodedToken.role;
    if (
      typeof role === 'string' &&
      Object.values(ROLES).includes(role as Role)
    ) {
      return role as Role;
    }

    return ROLES.STUDENT;
  }

  private getTenantIdFromClaims(decodedToken: DecodedIdToken): string {
    if (
      typeof decodedToken.tenantId === 'string' &&
      decodedToken.tenantId.length > 0
    ) {
      return decodedToken.tenantId;
    }

    const firebaseClaim = decodedToken.firebase as
      | { tenant?: unknown }
      | undefined;
    if (
      typeof firebaseClaim?.tenant === 'string' &&
      firebaseClaim.tenant.length > 0
    ) {
      return firebaseClaim.tenant;
    }

    return 'default';
  }

  private getPermissionsFromClaims(decodedToken: DecodedIdToken): string[] {
    if (!Array.isArray(decodedToken.permissions)) {
      return [];
    }

    return decodedToken.permissions.filter(
      (permission): permission is string => typeof permission === 'string',
    );
  }
}
