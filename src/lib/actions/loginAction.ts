"use server";

import { signIn } from "@/auth";

export async function authenticate(
    prevState: string | undefined,
  ) {
    try {
      console.log(prevState);
      const signInResult = await signIn(prevState, {
          email: 'jere_calvet@hotmail.com',
          callbackUrl: "http://localhost:3000/protected",           
        });
        console.log(signInResult);
    } catch (error) {
      if ((error as Error).message.includes("CredentialsSignIn")) {
        return 'CredentialsSignIn';
      }
      throw error;
    }
  }