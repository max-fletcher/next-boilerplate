"use client"
import GetPostsQuery from "@/components/rtk-query/get-posts-query"
import { useAddNewPostMutation } from "@/lib/redux/features/postsSlice";
import { Form } from "@/components/ui/form"
// import { postUpdateSchema, TPostUpdateSchema } from "@/lib/schema/storePost.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSession } from 'next-auth/react'
import CustomInput from "@/components/CustomInput"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { postStoreSchema, TPostStoreSchema } from "@/lib/schema/storePost.schema";


const Page = () => {
  // For update form logic
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  // Session coming from next-auth
  const { data: session } = useSession()

  // RTK Query For store post
  const [storePost, { isLoading: isStoreLoading, isSuccess: isStoreSuccess, error: storeError }] = useAddNewPostMutation()
  console.log('Store post RTK states', isStoreLoading, isStoreSuccess, storeError)

  // Hook form submit logic
  const onSubmit = async (data: TPostStoreSchema) => {
    setError(null)
    try {
      // RTK Query to submit formdata
      if(!session?.user?.id) throw new Error('User not logged in.')

      console.log('submit lol', data)
      await storePost({...data}).unwrap()
      setMessage('Save successful !')
    } catch (error: any) {
      console.log('onSubmit error', error)

      const apiMessage = error?.data?.response?.message || error?.message || 'Something went wrong'
      setError(apiMessage)
    }
  }

  // 1. Define your form.
  const form = useForm<TPostStoreSchema>({
    resolver: zodResolver(postStoreSchema),
    defaultValues: {
      user_id: session?.user.id,
      title: "",
      text: "",
    },
  })

  return (
    <>
      <h2>Posts(RTK Query)</h2>
      <br />
      <hr />
      <GetPostsQuery />
      <br />
      <hr />
      {/* <GetPostByIdQuery /> */}

      <hr />
      <br />

      <h1>Store New Post</h1>
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
          <CustomInput control={form.control} name="title" label="Title" placeholder="Enter title" type="text" />
          <CustomInput control={form.control} name="text" label="Text" placeholder="Enter text" type="text" />

          <div className="flex flex-col gap-4">
            {/* !form.formState.isDirty - Prevent form submission if form is dirty */}
            <Button type="submit" className="form-btn" disabled={isStoreLoading || !form.formState.isDirty}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default Page