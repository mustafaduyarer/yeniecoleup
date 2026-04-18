"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function Topbar() {
  const { t } = useLanguage();

  return (
    <header className="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">
      {t.dashboard.topbarTitle}
    </header>
  );
}
