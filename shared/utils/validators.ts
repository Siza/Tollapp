// This file contains the validation logic for the form data.
import { z } from "zod";

// Define zod schemas for data validation.
export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid E-Mail address." }),
  lastname: z.string().min(5, { message: "5 caractères minimum" }),
  firstname: z.string().min(5, { message: "5 caractères minimum" }),
  username: z.string().min(5, { message: "5 caractères minimum" }),
  phone: z
    .string()
    .regex(
      /^\+?[0-9]{1,4}?[-. ]?\(?[0-9]{1,3}?\)?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/,
      {
        message: "Please enter a valid phone number.",
      }
    )
    .optional(),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  company: z.string().min(3, { message: "Please enter a company name." }),
  website: z.string().url({ message: "Please enter a valid URL." }),
  address: z.string().min(5, { message: "Please enter an address." }),
  city: z.string().min(3, { message: "Please enter a city." }),
  state: z.string().min(2, { message: "Please enter a state." }),
  country: z.string().min(2, { message: "Please enter a country." }),
  bio: z
    .string()
    .max(200, { message: "La bio doit contenir moins de 200 caractères " })
    .or(z.literal("")),
  avatar: z.string().optional(),
});

// Define types.
export type FormData = z.infer<typeof formSchema>;
export type FormErrors = Partial<Record<keyof FormData, string>>;
