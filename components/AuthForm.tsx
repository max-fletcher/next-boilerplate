"use client"
import CustomInput from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { TAuthForm } from '@/constants/enums'
import { authFormSchema } from '@/lib/schema/authForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
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
      // Sign up with AppWrite and create plaid token
      if(type === TAuthForm.SIGN_UP){
        const userData = { // Create a new object in order to mitigate typescript errors in signUp inside user.actions.ts(i.e createDwollaCustomer function inside signUp)
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        }

        console.log('userData', userData);
        // const newUser = await signUp(userData)
        // setUser(newUser)
      }

      // NOTE: else condition here throws type error in response(An expression of type 'void' cannot be tested for truthiness) so we are using an if statement.
      if(type === TAuthForm.SIGN_IN){
        // const response = await signIn({
        //   email: data.email,
        //   password: data.password,
        // })

        // if(response !== null) router.push('/') // Navigate to homepage if logged in
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }
  }


  return (
    <section className="mt-[200px]">
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


        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
              {
                type === TAuthForm.SIGN_UP && (
                  <>
                    <div className="flex gap-4">
                      <CustomInput control={form.control} name="firstName" label="First Name" placeholder="Enter your first name" type="text" />
                      <CustomInput control={form.control} name="lastName" label="Last Name" placeholder="Enter your last name" type="text" />
                    </div>
                    <CustomInput control={form.control} name="address1" label="Address" placeholder="Enter your specific address" type="text" />
                    <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" type="text" />
                    <div className="flex gap-4">
                      <CustomInput control={form.control} name="state" label="State" placeholder="Enter your state e.g NY" type="text" />
                      <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder="Enter postal code e.g 12110" type="text" />
                    </div>
                    <div className="flex gap-4">
                      <CustomInput control={form.control} name="dateOfBirth" label="Date of birth" placeholder="YYYY-MM-DD" type="text" />
                      <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Enter SSN no. e.g 1234" type="text" />
                    </div>
                  </>
                )
              }
              <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" type="text" />
              <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" type="password" />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ?
                    <>
                      {/* Spinner/loader component. Comes from lucide-react. Got installed when we installed the sheet component from shadcn. */}
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Loading...
                    </> 
                    : 
                    type === TAuthForm.SIGN_IN ? "Sign In" : "Sign Up"
                  }
                </Button>
              </div>
            </form>
          </Form>

        <section>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              { type === TAuthForm.SIGN_IN ? "Don't have an account ?" : "Already have an account ?"}
            </p>
            <Link href={ type === TAuthForm.SIGN_IN ? 'sign-up' : 'sign-in'} className="form-link">
              { type === TAuthForm.SIGN_IN ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </section>
      </section>
  )
}

export default AuthForm