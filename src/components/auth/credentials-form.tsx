"use client";

import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Icons } from "@/src/components/ui/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { credentialsFormSchema, credentialsFormType } from "@/src/lib/schemas/credentials-form-schema";
import { loginCredentials } from "@/src/lib/actions/login-credentials-action";
import { useSearchParams } from 'next/navigation'

export default function CredentialsForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<credentialsFormType>({
        resolver: zodResolver(credentialsFormSchema)
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    return (
        <form onSubmit={handleSubmit((formData) => loginCredentials(formData, callbackUrl))}>
            <div className="grid gap-2">
                <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        {...register("email")}
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {`${errors.email.message}`}
                        </p>
                    )}
                </div>
                <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        {...register("password")}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isSubmitting}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            {`${errors.password.message}`}
                        </p>
                    )}
                </div>
                <Button disabled={isSubmitting || !isValid}>
                    {isSubmitting && (
                        <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Continue with username and password
                </Button>
            </div>
        </form>
    )
}
