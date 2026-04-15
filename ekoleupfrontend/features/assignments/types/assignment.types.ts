export type AssignmentStatus = "DRAFT" | "PUBLISHED" | "CLOSED";

export type Assignment = {
  id: string;
  title: string;
  status: AssignmentStatus;
  dueAt: string;
};
