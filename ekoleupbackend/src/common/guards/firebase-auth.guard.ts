import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ROLES, type Role } from '../constants/roles';
import type { Principal } from '../types/principal';
import { verifyFirebaseIdToken } from '../../auth/firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<{ headers?: { authorization?: string }; user?: Principal }>();
    const idToken = this.extractBearerToken(request.headers?.authorization);

    if (!idToken) {
      throw new UnauthorizedException('Missing Authorization Bearer token');
    }

    let decodedToken: DecodedIdToken;
    try {
      decodedToken = await verifyFirebaseIdToken(idToken);
    } catch {
      throw new UnauthorizedException('Invalid Firebase ID token');
    }

    request.user = {
      uid: decodedToken.uid,
      tenantId: this.getTenantId(decodedToken),
      role: this.getRole(decodedToken),
      permissions: this.getPermissions(decodedToken),
    };

    return true;
  }

  private extractBearerToken(authorizationHeader?: string): string | null {
    if (!authorizationHeader) {
      return null;
    }

    const [scheme, token] = authorizationHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
      return null;
    }

    return token;
  }

  private getRole(decodedToken: DecodedIdToken): Role {
    const role = decodedToken.role;
    if (
      typeof role === 'string' &&
      Object.values(ROLES).includes(role as Role)
    ) {
      return role as Role;
    }

    return ROLES.STUDENT;
  }

  private getTenantId(decodedToken: DecodedIdToken): string {
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

  private getPermissions(decodedToken: DecodedIdToken): string[] {
    if (!Array.isArray(decodedToken.permissions)) {
      return [];
    }

    return decodedToken.permissions.filter(
      (permission): permission is string => typeof permission === 'string',
    );
  }
}
