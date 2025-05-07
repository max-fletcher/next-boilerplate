
// import MobileNav from "@/components/MobileNav"
// import Sidebar from "@/components/Sidebar"
// import Image from "next/image"
// import { getLoggedInUser } from "../../lib/actions/user.actions"
// import { redirect } from "next/navigation"

import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import { User } from "@/types/User.types";

const loggedInUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@mail.com',
  thumbnail_url: '/public/profile.png',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Acts like a middleware. Will redirect user to "/sign-in" if he is not logged in
  // Using redirect instead of router.push since we are in a server component and router.push doesn't work in a server component
  // const loggedIn = await getLoggedInUser()
  // if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      {/* <Sidebar user={loggedIn} /> */}
      <LeftSidebar user={loggedInUser} />

      {/* NOTE: This is the mobile sidebar */}
      <div className="size-full flex-col">
          <Navbar user={loggedInUser} />
          {children}
        {/* <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu-icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div> */}
      </div>
    </main>
  )
}
