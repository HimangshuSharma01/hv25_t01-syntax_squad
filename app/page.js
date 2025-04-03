"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isAuthenticated, logout } = useKindeAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/api/auth/login?post_login_redirect_url=/dashboard");
      return;
    }

    const email = user?.email || "";

    if (email === "sharmahimangshu17@gmail.com") {
      redirect("/dashboard");
    } else if (email === "ankanmukhopadhyay0512@gmail.com") {
      redirect("/dashboard2");
    } else {
      redirect("/error");
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
