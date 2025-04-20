import { ModeToggle } from "./ModeToggle"
import SearchField from "./SearchField"

const Navbar = () => {
  return (
    <div className="w-full h-12 flex px-1">
      <SearchField />
      <ModeToggle />
    </div>
  )
}

export default Navbar