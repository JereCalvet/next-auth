'use server'

import { signIn } from "@/auth";
import { headers as nextHeaders } from "next/headers"

export async function loginOidc(provider: string, callbackUrl: string|null) {
  const headers = new Headers(nextHeaders());
  const redirectUrl: string = callbackUrl ?? headers.get("Referer") ?? "/";

  await signIn(provider, {
    redirect: true,
    redirectTo: redirectUrl,
  });
}

