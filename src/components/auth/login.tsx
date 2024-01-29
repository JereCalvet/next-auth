"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import MagicLinkForm from "@/src/components/auth/magiclink-form";
import CredentialsForm from "@/src/components/auth/credentials-form";
import OidcGoogleForm from "@/src/components/auth/oidc-google-form";
import OidcGithubForm from "@/src/components/auth/oidc-github-form";
import OidcKeycloakForm from "./oidc-keycloak-form";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Login({ className, ...props }: UserAuthFormProps) {
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <CredentialsForm />
            <div className="flex gap-2">
                <p className="text-sm text-muted-foreground">Dont have an account?</p>
                <Link className="text text-sm" href="/auth/create-account">
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

            <MagicLinkForm />

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
                <OidcGoogleForm />
                <OidcGithubForm />
                <OidcKeycloakForm />
            </div>
        </div>
    )
}