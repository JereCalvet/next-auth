import { auth } from "@/auth";
import Link from "next/link";


export default async function Home() {
  const session = await auth();
  console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center gap-0.5 p-24">
      <h1 className="text-3xl">Hello World</h1>

      {session ? (
        <Link className="text text-sm" href="/api/auth/signout">
          Logout
        </Link>
      ) : (
        <Link className="text text-sm" href="/auth/login">
          Login
        </Link>
      )}
    </main>
  )
}