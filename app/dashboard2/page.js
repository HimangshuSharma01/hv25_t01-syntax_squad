'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'


function dashboard2() {
  const {setTheme}=useTheme()
  useEffect(()=>{
          setTheme('system');

  },[])
  return (
    <div>
      
      
    </div>

  )
}

export default dashboard2
