"use client"

import { Button } from "@/src/components/ui/button";
import { Icons } from "@/src/components/ui/icons";
import { loginOidc } from "@/src/lib/actions/login-oidc-action";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

export default function OidcGithubForm() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    return (
        <form action={() => loginOidc('github', callbackUrl)}>
            <GithubButton />
        </form>
    )
}

function GithubButton() {
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