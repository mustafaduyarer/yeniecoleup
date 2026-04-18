"use client";

import { useLanguage } from "@/lib/i18n/language-context";

type LegalPageKey = "privacy" | "terms" | "contentRights" | "consentUnder16";

export default function LegalPageTemplate({
  pageKey,
}: {
  pageKey: LegalPageKey;
}) {
  const { t } = useLanguage();
  const page = t.legalPages[pageKey];

  return (
    <main className="min-h-screen bg-[#f9f5f8] px-6 py-20 text-[#2f2e30] sm:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_20px_50px_rgba(14,14,16,0.06)] sm:p-12">
        <h1 className="text-3xl font-black tracking-tight text-[#0058ba] sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          {t.legalCommon.lastUpdated}
        </p>

        <section className="mt-8 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </div>
    </main>
  );
}
