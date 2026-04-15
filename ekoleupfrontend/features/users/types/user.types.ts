export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "TEACHER"
  | "STUDENT"
  | "PARENT";

export type UserSummary = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  tenantId: string;
};
