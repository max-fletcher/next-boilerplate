import { TAuthForm } from "@/constants/enums"
import { z } from "zod"

// NOTE: We are exporting a function here instead of an object so we can accept a type and use conditionals. We can still get an object out of it by calling this function though.
export const authFormSchema = (type: TAuthForm) => {
  if(type === TAuthForm.SIGN_IN)
    // Sign In
    return z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      address1: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      postalCode: z.string().optional(),
      dateOfBirth: z.string().optional(),
      ssn: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    })
  // Not using 'else' here makes TS think that we might be returning 'undefined', so using 'else' instead of 'else if' is quintessential.
  else
      // Sign Up
      return z.object({
        firstName: z.string().min(3),
        lastName: z.string().min(3),
        address1: z.string().max(50),
        city: z.string().max(50),
        state: z.string().min(2).max(2),
        postalCode: z.string().min(5),
        dateOfBirth: z.string().min(3),
        ssn: z.string().min(3),
        // Both Sign In & Sign Up
        email: z.string().email(),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
      })
}