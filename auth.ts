import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Github
  ]
});