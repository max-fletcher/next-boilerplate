import CustomBarChart from "@/components/CustomBarChart"
import HomeButtonGroupContainer from "@/components/HomeButtonGroupContainer"
import HomepageCalendar from "@/components/HomepageCalendar"
import CreditCardIcon from "@/components/icons/CreditCard"
import DollarIcon from "@/components/icons/Dollar"
import LineChartIcon from "@/components/icons/LineChart"
import UserGroupIcon from "@/components/icons/UserGroup"
import ProductGrowthListItem from "@/components/ProductGrowthListItem"
import StatisticsCard from "@/components/StatisticsCard"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "September", desktop: 237 },
  { month: "October", desktop: 73 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 214 },
]

const productGrowthData = [
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
  { title: "WOO shirt heavy", titleNum: 3550, subtitle: "T-shirts", subtitleNum: 12 },
]

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
        <StatisticsCard header="Total de visiteurs" Icon={UserGroupIcon} title="2350" subtitle={<div>impressions, <span className="underline">Voir le rapport</span></div>} subtitleClasses="text-muted" />
        <StatisticsCard header="Total Revenues" Icon={LineChartIcon} title="DA45,2310.89" subtitle="+20.1%" subtitleClasses="text-muted underline" />
        <StatisticsCard header="Total Revenues" Icon={CreditCardIcon} title="DA45,2310.89" subtitle="+20.1%"  subtitleClasses="text-muted underline" />
      </div>

      <div className="grid gap-4 grid-cols-6">
        <div className="col-span-4 border-2 rounded-xl">
          <div className={cn("m-6 font-medium text-sm", geist.className)}>
            Overview
          </div>
          <CustomBarChart className="px-5 py-4" chartData={chartData} />
        </div>
        <div className={cn("col-span-2 border-2 rounded-xl px-5 py-4", geist.className)}>
          <div className="px-5 py-5">
            <div className="font-medium text-base">
              Meilleur produit vendue
            </div>
            <div className="font-normal text-sm text-muted">
              You made 265 sales this month.
            </div>
          </div>

          <div className="flex flex-col gap-4 px-5">
            {productGrowthData.map((product, index) =>
              <ProductGrowthListItem key={index} {...product} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page