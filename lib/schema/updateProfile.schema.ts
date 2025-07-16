import { z } from "zod"

export const userUpdateSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email().optional(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  avatar: z.any().optional(), // accepts a File or string
})

// ✅ Export the schema and its type
export type TUserUpdateSchema = z.infer<typeof userUpdateSchema>