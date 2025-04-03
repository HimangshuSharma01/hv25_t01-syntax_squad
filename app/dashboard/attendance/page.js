import MonthSelection from '@/app/_components/MonthSelection'
import React from 'react'

function Attendance() {
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>Attendance</h1>

      <div> <MonthSelection/> </div>
    </div>
  )
}

export default Attendance
