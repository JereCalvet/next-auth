"use client";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { useFormState, useFormStatus } from "react-dom";
import { Icons } from "@/src/components/ui/icons";
import Link from "next/link";
import { authenticate } from "@/src/lib/loginAction";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
    const [loginCredentialsFormState, dispatchCredentialsLogin] = useFormState(authenticate, 'credentials');
    const [loginMagiclinkFormState, dispatchMagiclinkLogin] = useFormState(authenticate, 'magiclink');
    const [loginGoogleFormState, dispatchGoogleLogin] = useFormState(authenticate, 'google');
    const [loginGithubFormState, dispatchGithubLogin] = useFormState(authenticate, 'github');
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form action={dispatchCredentialsLogin}>
                <Credentials />
            </form>

            <div className="flex gap-2">
                <p className="text-sm text-muted-foreground">Dont have an account?</p>
                <Link className="text text-sm" href="/authentication/create-account">
                    Create account
                </Link>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or
                    </span>
                </div>
            </div>

            <form action={dispatchMagiclinkLogin}>
                <MagicLink />
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="grid gap-2">
                <form action={dispatchGoogleLogin}>
                    <OidcGoogle />
                </form>

                <form action={dispatchGithubLogin}>
                    <OidcGithub />
                </form>
            </div>
        </div>
    )
}

function Credentials() {
    const { pending } = useFormStatus();
    return (
        <div className="grid gap-2">
            <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                    Email
                </Label>
                <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={pending}
                />
            </div>
            <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    //required
                    //minLength={6}
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={pending}
                />
            </div>
            <Button disabled={pending}>
                {pending && (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Continue with username and password
            </Button>
        </div>
    )
}

function MagicLink() {
    const { pending } = useFormStatus();
    return (
        <div className="grid gap-2">
            <div className="grid gap-1">
                <Label className="sr-only" htmlFor="emailmagiclink">
                    Email magic link
                </Label>
                <Input
                    id="emailmagiclink"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={pending}
                />
            </div>
            <Button disabled={pending}>
                {pending && (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Continue with Email Magic Link
            </Button>
        </div>
    )
}

function OidcGoogle() {
    const { pending } = useFormStatus();
    return (
        <Button className="w-full" variant="outline" type="submit" disabled={pending}>
            {pending ? (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Icons.Google className="mr-2 h-4 w-4" />
            )}{" "}
            Google
        </Button>
    )
}

function OidcGithub() {
    const { pending } = useFormStatus();
    return (
        <Button className="w-full" variant="outline" type="submit" disabled={pending}>
            {pending ? (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Icons.GitHub className="mr-2 h-4 w-4" />
            )}{" "}
            Github
        </Button>
    )
}

