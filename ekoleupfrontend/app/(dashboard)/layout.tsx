import type { ReactNode } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <div>
          <Topbar />
          {children}
        </div>
      </div>
    </div>
  );
}
