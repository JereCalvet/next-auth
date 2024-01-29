'use server'

import { signIn } from "@/auth";
import { credentialsFormSchema, credentialsFormType } from "@/src/lib/schemas/credentials-form-schema";
import { headers as nextHeaders } from "next/headers"

export async function loginCredentials(formData: credentialsFormType, callbackUrl: string|null) {
  const validatedFields = credentialsFormSchema.safeParse(formData);
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    }
  }  

  const { email, password } = validatedFields.data;

  const headers = new Headers(nextHeaders());
  const redirectUrl: string = callbackUrl ?? headers.get("Referer") ?? "/";
  
  await signIn("credentials", {
    email: email,
    password: password,
    redirect: true,
    redirectTo: redirectUrl,
  });
}

