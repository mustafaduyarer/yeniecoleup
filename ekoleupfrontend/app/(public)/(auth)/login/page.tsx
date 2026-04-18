"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { loginWithFirebaseToken } from "@/features/auth/api/authClient";
import { persistAuthSession } from "@/lib/auth/client-session";
import { getFirebaseAuthClient } from "@/lib/firebase/client";
import { useLanguage } from "@/lib/i18n/language-context";

export default function LoginPage() {
  const { t } = useLanguage();
  const copy = t.auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handlePostLogin(
    loginResponse: Awaited<ReturnType<typeof loginWithFirebaseToken>>,
  ) {
    persistAuthSession({
      uid: loginResponse.user.uid,
      email: loginResponse.user.email,
      name: loginResponse.user.name,
    });
    window.location.assign("/");
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const auth = getFirebaseAuthClient();
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const idToken = await credential.user.getIdToken();
      handlePostLogin(await loginWithFirebaseToken(idToken));
    } catch {
      const message = copy.loginFailedFallback;
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const auth = getFirebaseAuthClient();
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(auth, provider);
      const idToken = await credential.user.getIdToken();
      handlePostLogin(await loginWithFirebaseToken(idToken));
    } catch {
      const message = copy.googleFailedFallback;
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f9f5f8] px-6 py-20">
      <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          {copy.loginTitle}
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="email"
            placeholder={copy.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="password"
            placeholder={copy.passwordPlaceholder}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#0058ba] py-2 font-semibold text-white"
          >
            {isSubmitting ? copy.signInProgress : copy.continue}
          </button>
          {errorMessage ? (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          ) : null}
        </form>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
            className="w-full rounded-lg border border-slate-300 bg-white py-2 font-semibold text-slate-700"
          >
            {isSubmitting ? copy.pleaseWait : copy.googleContinue}
          </button>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          {copy.noAccount}{" "}
          <Link className="font-semibold text-[#0058ba]" href="/signup">
            {copy.signUpCta}
          </Link>
        </p>
      </section>
    </main>
  );
}
