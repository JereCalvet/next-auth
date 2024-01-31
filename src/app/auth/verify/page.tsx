import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { buttonVariants } from "@/src/components/ui/button"
import Link from "next/link";

export default function Verify() {
    return (
        <section className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Card className="border-none grid w-full items-center gap-4">
                <CardHeader>
                    <CardTitle>Check your email</CardTitle>
                    <CardDescription>A sign in link has been sent to your email address.</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>If you don&apos;t see the email in your inbox, please check your spam or junk folder. You can close this page now.</CardDescription>
                </CardContent>
                <CardFooter>
                    <Link href="/auth/login" className={buttonVariants({ variant: "outline" })}>Go Back</Link>
                </CardFooter>
            </Card>
        </section>
    )
}