type LoginResponse = {
  user: {
    uid: string;
    email: string | null;
    name: string | null;
    picture: string | null;
    emailVerified: boolean;
  };
  claims: {
    role: string;
    tenantId: string;
    permissions: string[];
  };
  token: {
    expiresAt: number | null;
  };
};

type ApiEnvelope<T> = {
  success: boolean;
  data: T;
};

function resolveApiBaseUrl(): string {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
  const normalizedBaseUrl = rawBaseUrl.endsWith("/")
    ? rawBaseUrl.slice(0, -1)
    : rawBaseUrl;

  return normalizedBaseUrl.endsWith("/api")
    ? normalizedBaseUrl
    : `${normalizedBaseUrl}/api`;
}

export async function loginWithFirebaseToken(
  idToken: string,
): Promise<LoginResponse> {
  const response = await fetch(`${resolveApiBaseUrl()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    try {
      const parsed = JSON.parse(errorText) as {
        error?: string;
        message?: string | string[];
      };

      if (typeof parsed.error === "string" && parsed.error.length > 0) {
        throw new Error(parsed.error);
      }

      if (Array.isArray(parsed.message) && parsed.message.length > 0) {
        throw new Error(parsed.message.join(", "));
      }

      if (typeof parsed.message === "string" && parsed.message.length > 0) {
        throw new Error(parsed.message);
      }
    } catch {
      throw new Error(errorText || "Login request failed");
    }

    throw new Error("Login request failed");
  }

  const payload = (await response.json()) as
    | LoginResponse
    | ApiEnvelope<LoginResponse>;

  if ("data" in payload) {
    return payload.data;
  }

  return payload;
}
