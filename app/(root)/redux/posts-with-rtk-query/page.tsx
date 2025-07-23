import GetPostsQuery from "@/components/rtk-query/get-posts-query"
import GetPostByIdQuery from "@/components/rtk-query/get-post-by-id-query"

const Page = () => {
  return (
    <>
      <h2>Posts(RTK Query)</h2>
      <br />
      <hr />
      <GetPostsQuery />
      <br />
      <hr />
      <GetPostByIdQuery />
    </>
  )
}

export default Page