import { z } from "zod";

export const interestFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  company: z.string().min(1, "Company is required").max(150),
  phone: z.string().max(30).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export type InterestFormData = z.infer<typeof interestFormSchema>;
