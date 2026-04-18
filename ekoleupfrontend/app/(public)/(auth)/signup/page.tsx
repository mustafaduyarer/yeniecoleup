"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { loginWithFirebaseToken } from "@/features/auth/api/authClient";
import { persistAuthSession } from "@/lib/auth/client-session";
import { getFirebaseAuthClient } from "@/lib/firebase/client";
import { useLanguage } from "@/lib/i18n/language-context";

export default function SignupPage() {
  const { t } = useLanguage();
  const copy = t.auth;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const auth = getFirebaseAuthClient();
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (fullName.trim()) {
        await updateProfile(credential.user, { displayName: fullName.trim() });
      }

      const idToken = await credential.user.getIdToken();
      const loginResponse = await loginWithFirebaseToken(idToken);
      persistAuthSession({
        uid: loginResponse.user.uid,
        email: loginResponse.user.email,
        name: loginResponse.user.name,
      });
      window.location.assign("/");
    } catch {
      const message = copy.signupFailedFallback;
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
      const loginResponse = await loginWithFirebaseToken(idToken);
      persistAuthSession({
        uid: loginResponse.user.uid,
        email: loginResponse.user.email,
        name: loginResponse.user.name,
      });
      window.location.assign("/");
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
          {copy.signupTitle}
        </h1>
        <p className="mb-6 text-sm text-slate-600">{copy.onboardingHint}</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="text"
            placeholder={copy.fullNamePlaceholder}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
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
            minLength={6}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#0058ba] py-2 font-semibold text-white"
          >
            {isSubmitting ? copy.createAccountProgress : copy.createAccount}
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
          {copy.alreadyRegistered}{" "}
          <Link className="font-semibold text-[#0058ba]" href="/login">
            {copy.loginCta}
          </Link>
        </p>
      </section>
    </main>
  );
}
