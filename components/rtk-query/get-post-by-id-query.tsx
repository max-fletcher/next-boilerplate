"use client"

import { useGetPostByIdQuery } from "@/lib/redux/features/postsSlice"

const GetPostByIdQuery = () => {
  const id = 32
  const { data, isLoading, isSuccess, isError, error } = useGetPostByIdQuery(id)
  console.log('GetPostByIdQuery post', data, isLoading, isSuccess, isError, error)

  const post = data?.entities[data.ids[0]]

  return (
    <>
      <h5>Using &quot;useGetPostByIdQuery&quot;</h5>
      {isSuccess &&
        <div className="mb-4 border p-4 rounded">
          <h4 className="text-lg font-semibold">{post?.title}</h4>
          <p>{post?.text}</p>
          <small>Posted by: {post?.user?.name}</small>
        </div>
      }
    </>
  )
}

export default GetPostByIdQuery