import { z } from 'zod';


export const magicLinkFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

export type magicLinkFormType = z.infer<typeof magicLinkFormSchema>;