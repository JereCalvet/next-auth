"use client";

import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Icons } from "@/src/components/ui/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { magicLinkFormSchema, magicLinkFormType } from "@/src/lib/schemas/magiclink-form-schema";
import { loginMagicLink } from "@/src/lib/actions/login-magiclink-action";
import { useSearchParams } from 'next/navigation'

export default function MagicLinkForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<magicLinkFormType>({
        resolver: zodResolver(magicLinkFormSchema)
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    return (
        <form onSubmit={handleSubmit((formData) => loginMagicLink(formData, callbackUrl))}>
            <div className="grid gap-2">
                <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="emailmagiclink">
                        Email magic link
                    </Label>
                    <Input
                        {...register("email")}
                        id="emailmagiclink"
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
                <Button disabled={isSubmitting || !isValid}>
                    {isSubmitting && (
                        <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Continue with Email Magic Link
                </Button>
            </div>
        </form>
    )
}
