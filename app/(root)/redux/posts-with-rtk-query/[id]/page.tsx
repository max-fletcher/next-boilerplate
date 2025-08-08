"use client"
import { useDeletePostMutation, useGetPostByIdQuery } from "@/lib/redux/features/postsSlice";
import { Form } from "@/components/ui/form"
import { postUpdateSchema, TPostUpdateSchema } from "@/lib/schema/updatePost.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSession } from 'next-auth/react'
import CustomInput from "@/components/CustomInput"
import { useEffect, useMemo, useState } from "react"
import { useUpdatePostMutation } from "@/lib/redux/features/postsSlice"
import { Button } from "@/components/ui/button";

// type Param = string | string[] | undefined;
interface SinglePostPage {
  params: { id: number };
  // searchParams: { [key: string]: Param };
}

const Page = ({ params }: SinglePostPage) => {
  // For update form logic
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  
  // Session coming from next-auth
  const { data: session } = useSession()

  // RTK for get single post
  const { data, isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError, error: postError } = useGetPostByIdQuery(params?.id)
  console.log('Single GetPostByIdQuery post RTK states', data, isPostLoading, isPostSuccess, isPostError, postError)

  const [deletePost, { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, error: deleteError }] = useDeletePostMutation()
  console.log('Delete post RTK states', isDeleteLoading, isDeleteSuccess, deleteError)

  const handleDelete = async () => {
    setError(null)
    try {
      await deletePost({ id: params?.id }).unwrap()
      setMessage('Delete successful !')
    } catch (error: any) {
      const apiMessage = error?.data?.response?.message || error?.message || 'Delete failed'
      setError(apiMessage)
    }
  }

  // Extract post from RTK cache of entities
  const post = useMemo(() => {
    if (!data || data.ids.length === 0) return null
    return data.entities[data.ids[0]]
  }, [data])

  // RTK for update post
  const [updatePost, { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess, error: updateError }] = useUpdatePostMutation()
  console.log('Update post RTK states', isUpdateLoading, isUpdateSuccess, updateError)

  // Hook form submit logic
  const onSubmit = async (data: TPostUpdateSchema) => {
    setError(null)
    try {
      // RTK Query to submit formdata
      if(!session?.user?.id) throw new Error('User not logged in.')

      console.log('submit lol', data)
      await updatePost({ id: params?.id, ...data}).unwrap()
      setMessage('Save successful !')
    } catch (error: any) {
      console.log('onSubmit error', error)
      const apiMessage = error?.data?.response?.message || error?.message || 'Something went wrong'
      setError(apiMessage)
    }
  }

  // Define your form
  const form = useForm<TPostUpdateSchema>({
    resolver: zodResolver(postUpdateSchema),
    defaultValues: {
      user_id: session?.user.id,
      title: "",
      text: "",
    },
  })

  useEffect(() => {
    if (post) {
      form.reset({
        title: post.title || '',
        text: post.text || '',
        user_id: post.user_id || session?.user.id, // fallback
      })
    }
  }, [post, form.reset, session?.user.id])

  return (
    <>
      <h2>Single Post(RTK Query)</h2>
      <h5>Using &quot;useGetPostByIdQuery&quot;</h5>
      {isPostSuccess &&
        <div className="mb-4 border p-4 rounded">
          <h4 className="text-lg font-semibold">{post?.title}</h4>
          <p>{post?.text}</p>
          <small>Posted by: {post?.user?.name}</small>
          {/* disabled={isUpdateLoading} */}
          <br />
          <Button onClick={handleDelete} disabled={isDeleteLoading} className="p-4 mt-3 bg-neutral-700 text-red-600"> 
            {isDeleteLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      }

      <hr />
      <br />

      <h1>Update New Post</h1>
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
            <Button type="submit" className="form-btn" disabled={isUpdateLoading || !form.formState.isDirty}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default Page