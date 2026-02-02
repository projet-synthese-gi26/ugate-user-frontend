import { z } from 'zod';

export const LoginSchema = z.object({
    identifier: z.string().min(1, 'required'),
    password: z.string().min(1, 'required'),
});

export const RegisterSchema = z.object({
    username: z.string().min(3, 'username_min'),
    email: z.string().email('email_invalid'),
    firstName: z.string().min(2, 'firstname_min'),
    lastName: z.string().min(2, 'lastname_min'),
    phone: z.string().min(9, 'phone_min'),
    password: z.string().min(8, 'password_min'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "passwords_mismatch",
    path: ["confirmPassword"],
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;