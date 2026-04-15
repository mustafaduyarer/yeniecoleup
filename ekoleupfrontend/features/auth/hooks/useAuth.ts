"use client";

import { useEffect, useState } from "react";
import {
  readAuthSession,
  type ClientAuthSession,
} from "@/lib/auth/client-session";

type AuthState = {
  isAuthenticated: boolean;
  role: string | null;
  user: ClientAuthSession | null;
};

export function useAuth(): AuthState {
  const [user, setUser] = useState<ClientAuthSession | null>(null);

  useEffect(() => {
    setUser(readAuthSession());
  }, []);

  return {
    isAuthenticated: user !== null,
    role: null,
    user,
  };
}
