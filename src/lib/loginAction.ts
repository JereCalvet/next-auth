"use server";

import { signIn } from "@/auth";

export async function authenticate(
    prevState: string | undefined,
  ) {
    console.log(prevState);
    try {
        await signIn(prevState);
    } catch (error) {
      if ((error as Error).message.includes("CredentialsSignIn")) {
        return 'CredentialsSignIn';
      }
      throw error;
    }
  }