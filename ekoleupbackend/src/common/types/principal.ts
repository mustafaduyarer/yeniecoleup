import type { Role } from '../constants/roles';

export type Principal = {
  uid: string;
  tenantId: string;
  role: Role;
  permissions: string[];
};
