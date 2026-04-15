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

export default function SignupPage() {
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
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again.";
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
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Google sign-in failed. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f9f5f8] px-6 py-20">
      <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">Sign up</h1>
        <p className="mb-6 text-sm text-slate-600">
          Initial onboarding page scaffold.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            type="password"
            placeholder="Password"
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
            {isSubmitting ? "Creating account..." : "Create account"}
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
            {isSubmitting ? "Please wait..." : "Continue with Google"}
          </button>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Already registered?{" "}
          <Link className="font-semibold text-[#0058ba]" href="/login">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
