import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import Keycloak from 'next-auth/providers/keycloak';
import { CustomSendVerificationRequest } from '@/src/app/auth/signinemail/page';
import bcrypt from "bcrypt";
import fetchUser from '@/src/lib/data/fetchUser';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    EmailProvider({
      server: process.env.NODE_ENV !== "production" ? {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      } : {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        secure: true,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        CustomSendVerificationRequest({ identifier, url, provider })
      },
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        //const parsedCredentials = z
        //  .object({
        //    email: z.string().email(),
        //    password: z.string().min(6),
        //  })
        //  .safeParse(credentials);
        // if (parsedCredentials.success) {
          const { email, password } = credentials;
          const user = await fetchUser(email);
          if (!user) return null;
          const passwordMatches = await bcrypt.compare(password, user.password);
          if (passwordMatches) return user;
        // }

        console.log("invalid credrentials");
        return null;
      }
    }),
    Google,
    Github,
    Keycloak
  ],
  debug: process.env.NODE_ENV !== "production",
});