import { z } from "zod";

export const quoteSchema = z.object({
  companyName: z.string().min(1, "Company name is required").max(120),
  contactName: z.string().min(1, "Contact name is required").max(80),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(6, "Phone must be at least 6 characters")
    .max(24)
    .optional()
    .or(z.literal("")),
  country: z.string().min(1, "Country is required"),
  productsOfInterest: z.string().min(1, "Tell us which products you need"),
  estimatedQuantity: z.string().min(1, "Give us a rough quantity"),
  targetLeadTime: z.string().optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
  honeypot: z.string().max(0, "Bot detected"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
