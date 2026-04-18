"use client";

import Link from "next/link";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth();
  const { language, setLanguage, t, languageOptions } = useLanguage();
  const copy = t.navbar;

  return (
    <header className="fixed top-0 z-50 w-full bg-[rgba(249,245,248,0.7)] shadow-[0_20px_40px_rgba(14,14,16,0.06)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="text-2xl font-black tracking-tight text-[#0058ba]">
          <a
            href="http://localhost:3000/"
            className="flex items-center space-x-2"
          >
            <img
              src="/yenipng.png"
              alt="EcoleUP Logo"
              className="h-8 w-8 object-contain"
            />
            <span>EcoleUP</span>
          </a>
        </div>
        <div className="hidden items-center space-x-10 md:flex">
          <a
            href="#features"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            {copy.features}
          </a>
          <a
            href="#about"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            {copy.about}
          </a>
          <a
            href="#academics"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            {copy.academics}
          </a>
          <a
            href="#contact"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            {copy.contact}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <label className="hidden text-sm font-semibold text-slate-600 md:block">
            {copy.language}
          </label>
          <select
            value={language}
            onChange={(event) =>
              setLanguage(
                event.target.value as (typeof languageOptions)[number]["code"],
              )
            }
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
            aria-label={copy.language}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code.toUpperCase()}
              </option>
            ))}
          </select>

          {isAuthenticated ? (
            <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>{copy.loggedIn}</span>
              {user?.name ? (
                <span className="text-emerald-900">{user.name}</span>
              ) : null}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full bg-[#0058ba] px-8 py-2.5 font-medium text-white"
              >
                {copy.login}
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-[#0058ba] px-8 py-2.5 font-medium text-white"
              >
                {copy.signUp}
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
