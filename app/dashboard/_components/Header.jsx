"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const {user}=useKindeBrowserClient();
  return (
    <div className="p-4 shadow-sm border flex justify-end">
      <div>
        <div>
        <h3 className="text-2xl">Welcome,</h3>
            <h2 className="text-xl text-amber-50">{user?.given_name} {user?.family_name}</h2>
            <h2 className="text-sm text-blue-300">{user?.email}</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
