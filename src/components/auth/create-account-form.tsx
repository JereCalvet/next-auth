"use client";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/ui/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountCredentialsFormSchema, createAccountCredentialsFormType } from "@/src/lib/schemas/create-acc-credentials-form-schema";
import { useSearchParams } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function CreateAccountForm({ className, ...props }: UserAuthFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<createAccountCredentialsFormType>({
        resolver: zodResolver(createAccountCredentialsFormSchema)
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form action={'asd'}>
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
                    <Button disabled={isSubmitting}>
                        {isSubmitting && (
                            <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}