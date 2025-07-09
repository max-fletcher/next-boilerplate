import { TAuthForm } from "@/constants/enums"
import { z } from "zod"

// NOTE: We are exporting a function here instead of an object so we can accept a type and use conditionals. We can still get an object out of it by calling this function though.
export const authFormSchema = (type: TAuthForm) => {
  if(type === TAuthForm.SIGN_IN)
    // Sign In
    return z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    })
  // Not using 'else' here makes TS think that we might be returning 'undefined', so using 'else' instead of 'else if' is quintessential.
  else
      // Sign Up
      return z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
      })
}

// These are for using 'z.infer' since making a 'authFormSchema' causes a TS error ('authForm' is assigned a value but only used as a type)
export const signUpForm = authFormSchema(TAuthForm.SIGN_UP)
export const signInForm = authFormSchema(TAuthForm.SIGN_IN)