import { auth } from "@/auth";
import Login from "@/src/components/auth/login"
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();
    if (session) {
        redirect('/');
    }

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Login
                </h1>
                <p className="text-sm text-muted-foreground">
                    Login to your account to continue
                </p>
            </div>
            <Login />
        </div>
    )
}
