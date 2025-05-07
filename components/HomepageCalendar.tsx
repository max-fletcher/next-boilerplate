"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"

const HomepageCalendar = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })

  // function onChange(data: DateRange|undefined) {
    
  // }

  useEffect(() => {
    if(date && date.from && date.to){
      // setDate(data)
      console.log('date', date);
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(date.to, null, 2)} - {JSON.stringify(date.to, null, 2)}</code>
          </pre>
        ),
      })
    }
  }, [date])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={new Date()}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          classNames={{
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-8 w-8 m-1 p-0 font-normal aria-selected:opacity-100 mr-1"
            ),
            day_selected: 'bg-calendar_selected text-calendar_selected_text !rounded-full',
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export default HomepageCalendar