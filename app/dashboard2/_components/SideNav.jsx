"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function SideNav() {
  const { user } = useKindeBrowserClient();
  const menuList = [
    {
      id: 1,
      name: "Overall Dashboard",
      icon: LayoutIcon,
      path: '/dashboard2'
    },
    {
      id: 2,
      name: 'Daily Attendance ',
      icon: Hand,
      path: '/dashboard2/students'
    },
    
  ]
  const path=usePathname();
  useEffect(( ) => {
    console.log(path)
  },[path])

  return (
    <div className='cursor-pointer border shadow-md h-screen align-middle p-4'>
      <Image src='/logo.png' width={150} height={40} alt='logo' />
      <hr className='my-2' />
      
      {menuList.map((menu) => (
        <Link key={menu.id} href={menu.path} className={`flex items-center gap-3 text-md p-5 text-slate-500 hover:bg-blue-500 hover:text-xl hover:text-amber-50 cursor-pointer rounded-lg my-2.5`}>
          
          <menu.icon />
          <span>{menu.name}</span>
        </Link>
      ))}
    </div>
 
       
    
  );
}

export default SideNav;
