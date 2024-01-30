'use server'

import { SendVerificationRequestParams } from "next-auth/providers"
import { sendMail } from "@/src/lib/mailer";
import { renderMagicLinkEmail } from "@/src/components/email-templates/login-magiclink-email";

export default async function CustomSendVerificationRequestAction(params: SendVerificationRequestParams) {
  const { identifier, url } = params
  const { host } = new URL(url)

  await sendMail({
    to: identifier,
    subject: `Login with Magic Link to ${host}`,
    text: `Login with Magic Link to ${host}\n${url}\n\n`,
    body: renderMagicLinkEmail({ magicLinkUrl: url, identifier }),
  })
}