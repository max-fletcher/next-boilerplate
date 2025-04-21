import HomeButtonGroupContainer from "@/components/HomeButtonGroupContainer"
import HomepageCalendar from "@/components/HomepageCalendar"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"

const page = () => {
  return (
    <div className="px-9 py-9">
      <div className={cn("font-bold text-3xl", geist.className)}>
        Tableau de bord
      </div>
      <hr className="separator my-5" />

      <div className="flex justify-between">
        <HomeButtonGroupContainer className="p-1 rounded-lg bg-[#F4F4F5] dark:bg-[#1F2937]" buttonClassName="rounded opacity-50" buttonActiveClassName="bg-[#6D28D9] text-white opacity-100" isToggle={true} orientation="horizontal" />
        <HomepageCalendar />
      </div>
    </div>
  )
}

export default page