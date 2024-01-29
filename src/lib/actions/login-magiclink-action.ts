'use server'

import { signIn } from "@/auth";
import { magicLinkFormSchema, magicLinkFormType } from "@/src/lib/schemas/magiclink-form-schema";
import { headers as nextHeaders } from "next/headers"

export async function loginMagicLink(formData: magicLinkFormType, callbackUrl: string|null) {
  const validatedFields = magicLinkFormSchema.safeParse(formData);
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Email is invalid.",
    }
  }  

  const { email } = validatedFields.data;

  const headers = new Headers(nextHeaders());
  const redirectUrl: string = callbackUrl ?? headers.get("Referer") ?? "/";
  
  await signIn("email", {
    email: email,
    redirect: true,
    redirectTo: redirectUrl,
  });
}

