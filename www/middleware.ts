import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const path = req.nextUrl.pathname;

  const publicPaths = ["/login", "/register"];

  const isPublic = publicPaths.includes(path);

  // ถ้าไม่มี token และไม่ใช่ public page → เด้งไป login
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ถ้ามี token และเข้า login/register → redirect ไป 
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
