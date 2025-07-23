import Link from "next/link"

const page = () => {
  return (
    <>
      Testing different aspects of redux:

      <div>
        <Link href={'redux/counter-with-slice'}>
          <h4>Counter with createSlice(non-async)</h4>
        </Link>
        <br />
        <br />
        <Link href={'redux/posts-with-rtk-query'}>
          <h4>Posts with RTK Query(async)</h4>
        </Link>
      </div>
    </>
  )
}

export default page