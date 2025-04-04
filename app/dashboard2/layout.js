"use client";
import { useState } from "react";
import Header from "app/dashboard2/_components/Header";
import SideNav from "app/dashboard2/_components/SideNav";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded bg-white text-black shadow-md dark:bg-gray-800 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-70 transition-transform duration-300 bg-white dark:bg-gray-900 shadow-lg z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <SideNav />
      </div>

      {isOpen && (
  <div
    className="fixed inset-0 z-40 md:hidden backdrop-blur-xs"
    onClick={() => setIsOpen(false)}
  ></div>
)}


      <div className={`md:ml-70 transition-all duration-300 ${isOpen ? "ml-60" : "ml-0 md:ml-60"}`}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
