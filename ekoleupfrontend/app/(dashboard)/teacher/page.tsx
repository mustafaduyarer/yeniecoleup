"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function TeacherPage() {
  const { t } = useLanguage();

  return (
    <h1 className="text-2xl font-bold text-slate-900">
      {t.dashboard.teacherTitle}
    </h1>
  );
}
