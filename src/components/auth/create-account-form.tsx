"use client";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { authenticate } from "@/src/lib/loginAction";
import { cn } from "@/src/lib/utils";
import { useFormState } from "react-dom";
import { Icons } from "@/src/components/ui/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function CreateAccountForm({ className, ...props }: UserAuthFormProps) {

    const [loginFormState, dispatchLogin] = useFormState(authenticate, undefined);
    const isLoading = false;
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
                            disabled={isLoading}
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
                            required
                            minLength={6}
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
        </div>
    )
}