"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const copy = t.footer;

  return (
    <footer className="w-full bg-[#f9f5f8] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-t border-slate-100 px-8 pt-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-[#0058ba]">EcoleUP</div>
          <p className="mt-3 text-sm text-slate-500">{copy.brandLine}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-500">
          <div className="space-y-2">
            <p className="font-bold text-slate-700">{copy.company}</p>
            <Link href="/privacy-policy">{copy.privacyPolicy}</Link>
            <br />
            <Link href="/terms-of-service">{copy.termsOfService}</Link>
            <br />
            <Link href="/content-rights">{copy.contentRights}</Link>
            <br />
            <Link href="/consent-form-under-16">{copy.consentUnder16}</Link>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-slate-700">{copy.resources}</p>
            <a href="#">{copy.facultyPortal}</a>
            <br />
            <a href="#">{copy.support}</a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-slate-700">
            {copy.stayConnected}
          </p>
          <p className="text-xs italic text-slate-600">{copy.quote}</p>
        </div>
      </div>
    </footer>
  );
}
