"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function StudentPage() {
  const { t } = useLanguage();

  return (
    <h1 className="text-2xl font-bold text-slate-900">
      {t.dashboard.studentTitle}
    </h1>
  );
}
