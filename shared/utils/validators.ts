// This file contains the validation logic for the form data.
import { z } from "zod";

// Define zod schemas for data validation.
export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid E-Mail address." }),
  lastname: z.string().min(5, { message: "5 caractères minimum" }),
  firstname: z.string().min(5, { message: "5 caractères minimum" }),
  username: z.string().min(5, { message: "5 caractères minimum" }),

  bio: z
    .string()
    .max(200, { message: "La bio doit contenir moins de 200 caractères " })
    .or(z.literal("")),
  avatar: z.string().optional(),
});

// Define types.
export type FormData = z.infer<typeof formSchema>;
export type FormErrors = Partial<Record<keyof FormData, string>>;
