import { z } from 'zod';


export const createAccountCredentialsFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[^0-9A-Za-z]).{8,}$/, 
    "Password must be at least 8 characters long, and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
});

export type createAccountCredentialsFormType = z.infer<typeof createAccountCredentialsFormSchema>;