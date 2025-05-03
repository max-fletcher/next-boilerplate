import HomeBarChart from "@/components/HomeBarChart"
import HomeButtonGroupContainer from "@/components/HomeButtonGroupContainer"
import HomepageCalendar from "@/components/HomepageCalendar"
import CreditCardIcon from "@/components/icons/CreditCard"
import DollarIcon from "@/components/icons/Dollar"
import LineChartIcon from "@/components/icons/LineChart"
import UserGroupIcon from "@/components/icons/UserGroup"
import StatisticsCard from "@/components/StatisticsCard"
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

      <div className="flex gap-4 my-5">
        <StatisticsCard header="Total Revenues" Icon={DollarIcon} title="DA45,2310.89" subtitle="+20.1%" subtitleClasses="text-green-500" />
        <StatisticsCard header="Total de visiteurs" Icon={UserGroupIcon} title="2350" subtitle="impressions, Voir le rapport"/>
        <StatisticsCard header="Total Revenues" Icon={LineChartIcon} title="DA45,2310.89" subtitle="+20.1%" />
        <StatisticsCard header="Total Revenues" Icon={CreditCardIcon} title="DA45,2310.89" subtitle="+20.1%" />
      </div>

      <div className="grid gap-4 grid-cols-6">
        <div className="col-span-4 border-2 rounded-xl">
          <div className={cn("m-6 font-medium text-sm", geist.className)}>
            Overview
          </div>
          <HomeBarChart className="px-5 py-4" />
        </div>
        <div className="col-span-2 border-2 rounded-xl">

        </div>
      </div>
    </div>
  )
}

export default page