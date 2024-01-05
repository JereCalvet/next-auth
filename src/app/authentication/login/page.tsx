import { auth } from "@/auth";
import LoginForm from "@/src/components/auth/login-form"

export default async function LoginPage() {
    //const session = await auth();
    //console.log(session)
    return (
        <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Login to your account to continue
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}
