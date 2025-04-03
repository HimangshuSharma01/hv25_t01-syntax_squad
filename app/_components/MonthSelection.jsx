import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar1Icon, CalendarCheckIcon, CalendarDays, } from 'lucide-react'

function MonthSelection() {
  return (
    <div>
      <Popover>
  <PopoverTrigger><button variant='outline' className="flex gap-2 items-center text-slate-500"> <CalendarDays/> Month</button></PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>

    </div>
  )
}

export default MonthSelection
