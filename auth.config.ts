import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import prisma from '@/src/lib/data/db';

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({session, token, user}: {session: any, token: any, user: any}) {
      console.log('session', session)
      console.log('user', user)
      console.log('token', token)
      //session.user.id = user.id
      return session
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const paths = ["/protected", "/me"]
      
      const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))
      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("api/auth/signin", nextUrl.origin)
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
        return Response.redirect(redirectUrl)
      }
      
      return true
    },
  },
  pages: {
    signIn: '/auth/login',
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify", // ?provider=email&type=email // (used for check email message)
  },
  providers: [],

} satisfies NextAuthConfig;