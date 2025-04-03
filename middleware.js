import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  const user = await getUser();
  const email = user?.email || "";
  const pathname = request.nextUrl.pathname;

  const teacherEmail = "sharmahimangshu17@gmail.com";
  const studentEmail = "ankanmukhopadhyay0512@gmail.com";


  if (email === studentEmail) {
    if (!pathname.startsWith("/dashboard2")) {
      return NextResponse.redirect(new URL("/dashboard2", request.url));
    }
    return NextResponse.next();
  }

  if (email === teacherEmail) {
    if (!pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/error", request.url));
}

export const config = {
  matcher: ["/dashboard(.*)", "/dashboard2(.*)"],
};
