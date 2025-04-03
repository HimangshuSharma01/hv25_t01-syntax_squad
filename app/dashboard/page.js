'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'


function Dashboard() {
  const {setTheme}=useTheme()
  useEffect(()=>{
          setTheme('system');

  },[])
  return (
    <div>
      
      
    </div>

  )
}

export default Dashboard
