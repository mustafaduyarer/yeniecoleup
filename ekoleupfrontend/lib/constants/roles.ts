export const ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "TEACHER",
  "STUDENT",
  "PARENT",
] as const;

export type Role = (typeof ROLES)[number];
