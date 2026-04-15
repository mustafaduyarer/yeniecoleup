"use client";

import Link from "next/link";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="fixed top-0 z-50 w-full bg-[rgba(249,245,248,0.7)] shadow-[0_20px_40px_rgba(14,14,16,0.06)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="text-2xl font-black tracking-tight text-[#0058ba]">
          EcoleUP
        </div>
        <div className="hidden items-center space-x-10 md:flex">
          <a
            href="#features"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            Features
          </a>
          <a
            href="#about"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            About Us
          </a>
          <a
            href="#academics"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            Academics
          </a>
          <a
            href="#contact"
            className="font-bold text-slate-600 transition hover:text-[#0058ba]"
          >
            Contact
          </a>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span>Login olundu</span>
            {user?.name ? (
              <span className="text-emerald-900">{user.name}</span>
            ) : null}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full bg-[#0058ba] px-8 py-2.5 font-medium text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[#0058ba] px-8 py-2.5 font-medium text-white"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
