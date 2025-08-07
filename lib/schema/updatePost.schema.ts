import { z } from "zod"

export const postUpdateSchema = z.object({
  user_id: z
    .coerce
    .number({ required_error: 'User if is required.' }),
  title: z
    .string({ required_error: 'Title is required.' })
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(1000, { message: "Title cannot be more than 1000 characters long." }),
  text: z
    .string({ required_error: 'Title is required.' })
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(1000, { message: "Title cannot be more than 1000 characters long." }),
})

// ✅ Export the schema and its type
export type TPostUpdateSchema = z.infer<typeof postUpdateSchema>