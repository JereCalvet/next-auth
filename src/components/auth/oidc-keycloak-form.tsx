"use client";

import { Button } from "@/src/components/ui/button";
import { Icons } from "@/src/components/ui/icons";
import { loginOidc } from "@/src/lib/actions/login-oidc-action";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function OidcKeycloakForm() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    return (
        <form action={() => loginOidc('keycloak', callbackUrl)}>
            <KeycloakButton />
        </form>
    )
}

function KeycloakButton() {
    const { pending } = useFormStatus();
    return (
        <Button className="w-full" variant="outline" type="submit" disabled={pending}>
            {pending ? (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Icons.Keycloak className="mr-2 h-4 w-4" />
            )}{" "}
            Keycloak
        </Button>
    )
}