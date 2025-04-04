"use client";
import { useKindeBrowserClient, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, Hand, LayoutIcon, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function SideNav() {
  const { user } = useKindeBrowserClient(); 

  const menuList = [
    { id: 1, name: "Overall Dashboard", icon: LayoutIcon, path: "/dashboard" },
    { id: 2, name: "Students Information", icon: GraduationCap, path: "/dashboard/students" },
    { id: 3, name: "Daily Attendance", icon: Hand, path: "/dashboard/attendance" },
    { id: 4, name: "Your Attendance", icon: Settings, path: "/app/dashboard/attendance2" },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="cursor-pointer border shadow-md h-screen align-middle p-4 flex flex-col justify-between">
      <div>
        <Image src="/logo.png" width={150} height={40} alt="logo" />
        <hr className="my-2" />

        {menuList.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            className={`flex items-center gap-3 text-md p-5 text-slate-500 hover:bg-blue-500 hover:text-xl hover:text-amber-50 cursor-pointer rounded-lg my-2.5 ${
              path === menu.path && "bg-primary text-amber-100"
            }`}
          >
            <menu.icon />
            <span>{menu.name}</span>
          </Link>
        ))}
      </div>

     
      <LogoutLink postLogoutRedirectURL="http://localhost:3000">
        <button className="flex items-center gap-3 text-md p-5 text-slate-500 hover:bg-red-500 hover:text-amber-50 cursor-pointer rounded-lg my-2.5">
          <LogOut />
          <span>Logout</span>
        </button>
      </LogoutLink>
    </div>
  );
}

export default SideNav;
