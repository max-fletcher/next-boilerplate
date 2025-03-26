import { User } from "@/types/User.types"
import Logo from "./navbar/Logo"

const LeftSidebar = ({user}: {user: User}) => {
  return (
    <div className="min-w-72 w-1/4 h-12 flex items-center">
        <Logo text="Admin Panel" />
        {user.name}
    </div>
  )
}

export default LeftSidebar