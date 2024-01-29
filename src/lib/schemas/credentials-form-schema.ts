import { z } from 'zod';


export const credentialsFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, { message: "You must enter a password" }),
});

export type credentialsFormType = z.infer<typeof credentialsFormSchema>;