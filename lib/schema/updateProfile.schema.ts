import { z } from "zod"

export const updateProfileSchema = () => {
    return z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(8, { message: "Password must be at least 8 characters." }),
      title: z.string().email().optional(),
      text: z.string().email().optional(),
      avatar: z.string().min(1, { message: "Password must be at least 1 characters." }).optional(),
    })
}