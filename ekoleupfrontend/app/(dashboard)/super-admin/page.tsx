"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function SuperAdminPage() {
  const { t } = useLanguage();

  return (
    <h1 className="text-2xl font-bold text-slate-900">
      {t.dashboard.superAdminTitle}
    </h1>
  );
}
