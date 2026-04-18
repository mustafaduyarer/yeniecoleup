"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
      {t.dashboard.sidebarTitle}
    </aside>
  );
}
