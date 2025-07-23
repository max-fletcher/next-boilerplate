"use client"

import { useGetPostsQuery } from "@/lib/redux/features/postsSlice"

const GetPostsQuery = () => {
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery()
  console.log('GetPostsQuery posts', posts, posts?.entities, isLoading, isSuccess, isError, error)

  return (
    <>
      <h5>Using &quot;useGetPostsQuery&quot;</h5>
      {isSuccess && posts.ids.map((id) => {
        const post = posts.entities[id]
        return (
          <div key={id} className="mb-4 border p-4 rounded">
            <h4 className="text-lg font-semibold">{post?.title}</h4>
            <p>{post?.text}</p>
            <small>Posted by: {post?.user?.name}</small>
          </div>
        )
      })}
    </>
  )
}

export default GetPostsQuery