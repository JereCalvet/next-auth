import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import Keycloak from 'next-auth/providers/keycloak';
import CustomSendVerificationRequestAction from '@/src/lib/actions/auth/custom-send-verification-request-action';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    EmailProvider({
      sendVerificationRequest(params) {
        CustomSendVerificationRequestAction(params)
      },
    }),
    Google,
    Github,
    Keycloak
  ],
  debug: process.env.NODE_ENV !== "production",
});