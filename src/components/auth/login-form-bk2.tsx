"use client";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { useFormState, useFormStatus } from "react-dom";
import { Icons } from "@/src/components/ui/icons";
import Link from "next/link";
import { authenticate } from "@/src/lib/loginAction";
import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
    const [loginFormState, dispatchLogin] = useFormState(authenticate, undefined);
    const pending = true;
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form action={dispatchLogin}>
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

            <form action={dispatchLogin}>
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

            <form action={dispatchLogin}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                    </div>
                </div>
            </form>
            <Button variant="outline" type="button" disabled={pending}>
                {pending ? (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.Google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
            </Button>
            <Button variant="outline" type="button" disabled={pending}>
                {pending ? (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.GitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    )
}