"use client"
import { TAuthForm } from '@/constants/enums'
import { authFormSchema } from '@/lib/schema/authForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const AuthForm = ({ type } : {type: TAuthForm}) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      console.log('onSubmit', data);
      // // Sign up with AppWrite and create plaid token
      // if(type === TAuthForm.SIGN_UP){
      //   const userData = { // Create a new object in order to mitigate typescript errors in signUp inside user.actions.ts(i.e createDwollaCustomer function inside signUp)
      //     firstName: data.firstName!,
      //     lastName: data.lastName!,
      //     address1: data.address1!,
      //     city: data.city!,
      //     state: data.state!,
      //     postalCode: data.postalCode!,
      //     dateOfBirth: data.dateOfBirth!,
      //     ssn: data.ssn!,
      //     email: data.email,
      //     password: data.password,
      //   }
      //   const newUser = await signUp(userData)
      //   setUser(newUser)
      // }

      // // NOTE: else condition here throws type error in response(An expression of type 'void' cannot be tested for truthiness) so we are using an if statement.
      // if(type === TAuthForm.SIGN_IN){
      //   const response = await signIn({
      //     email: data.email,
      //     password: data.password,
      //   })

      //   if(response !== null) router.push('/') // Navigate to homepage if logged in
      // }
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
          <div className="flex flex-col gap-1 md:gap-3">
            <h1>
              { type === TAuthForm.SIGN_IN ? "Sign In" : "Sign Up" }
              <p className="text-16 font-normal text-gray-600">
                { type === TAuthForm.SIGN_IN ? "Sign in to get started" : "Please enter your details" }
              </p>
            </h1>
          </div>
        </header>

        <>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              { type === TAuthForm.SIGN_IN ? "Don't have an account ?" : "Already have an account ?"}
            </p>
            <Link href={ type === TAuthForm.SIGN_IN ? 'sign-up' : 'sign-in'} className="form-link">
              { type === TAuthForm.SIGN_IN ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      </section>
  )
}

export default AuthForm