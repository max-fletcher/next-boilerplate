"use client"
import CustomInput from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { TUserUpdateSchema, userUpdateSchema } from '@/lib/schema/updateProfile.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FileDropzone } from '@/components/DropZone'
import { updateUser } from '@/lib/api'

const TestForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const { data: session, update } = useSession() // you can use this hook "useSession" to get token data in a client component, that was stored in jwt method

  // 1. Define your form.
  const form = useForm<TUserUpdateSchema>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: undefined
    },
  })

  const onSubmit = async (data: TUserUpdateSchema) => {
    setError(null)
    setIsLoading(true)
    try {
      // Server action to submit formdata
      if(!session?.user?.id) throw new Error('User not logged in.')

      console.log('submit lol', data)
      const res = await updateUser(session, data)

      if (res){
        setMessage('Save successful !')
        const { name, email, avatar } = res.data

        // directly update session data
        await update({
          user: { name, email, avatar },
        })
      }
      else
        throw new Error(res?.error || "Invalid credentials")
    } catch (error: any) {
      console.log('onSubmit error', error)
      setError(error.message?.replace(/^Error:\s*/, '') || "Something went wrong")
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
              <p className="text-16 font-normal text-red-600">
                {error ? error : ''}
                {message ? message : ''}
              </p>
            </h1>
          </div>
        </header>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
            <CustomInput control={form.control} name="name" label="Name" placeholder="Enter your name" type="text" />
            <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" type="text" />
            <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" type="password" />
            <Controller
              name="avatar"
              control={form.control}
              defaultValue={[]}
              render={({ field: { value, onChange } }) => (
                <FileDropzone selectedFiles={value} onFiles={onChange} />
              )}
            />

            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </Form>

        <section>
          <footer className="flex justify-center gap-1">
            Hello
          </footer>
        </section>
      </section>
  )
}

export default TestForm