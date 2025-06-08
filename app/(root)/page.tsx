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
    // h-[calc(99vh-60px)] overflow-y-scroll NOTE: Might be useful someday. Keeps the content part of the layout scrollable on overflow so navbar remains stuck on correct position i.e top of page
    <div className="z-0 px-9 py-7">
      <div className={cn("font-bold text-3xl", geist.className)}>
        Tableau de bord
      </div>

      <hr className="separator my-5" />

      <div className="flex flex-col md:flex-row justify-between">
        <HomeButtonGroupContainer 
          className="flex p-1 rounded-lg bg-[#F4F4F5] dark:bg-[#1F2937] mb-5 md:mb-0"
          buttonClassName="flex w-1/3 rounded opacity-50 px-2 md:px-4"
          buttonActiveClassName="bg-[#6D28D9] text-white opacity-100" 
          isToggle={true} 
          orientation="horizontal" 
        />
        <HomepageCalendar classes="md:w-[300px]" />
      </div>

      <div className="my-5 grid grid-cols-1 md:grid-cols-4  gap-4">
        <StatisticsCard header="Total Revenues" title="DA 45,2310.89" Icon={DollarIcon} classes="min-w-32" subtitle="+20.1%" subtitleClasses="text-green-500" />
        <StatisticsCard header="Total de visiteurs" title="2350" Icon={UserGroupIcon} classes="min-w-32" subtitle={<div>impressions, <span className="underline">Voir le rapport</span></div>} subtitleClasses="text-muted" />
        <StatisticsCard header="Total Revenues" title="DA 45,2310.89" Icon={LineChartIcon} classes="min-w-32 " subtitle="+20.1%" subtitleClasses="text-muted underline" />
        <StatisticsCard header="Total Revenues" title="DA 45,2310.89" Icon={CreditCardIcon} classes="min-w-32" subtitle="+20.1%"  subtitleClasses="text-muted underline" />
      </div>

      <div className="grid gap-4 grid-cols-6">
        <div className="col-span-6 md:col-span-4 border-2 rounded-xl">
          <div className={cn("m-6 font-medium text-sm", geist.className)}>
            Overview
          </div>
          <CustomBarChart className="px-5 py-4" chartData={chartData} />
        </div>
        <div className={cn("col-span-6 md:col-span-2 border-2 rounded-xl px-5 py-4", geist.className)}>
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