import { NextResponse } from "next/server";
import { auth } from "./auth";
import type { NextRequest } from "next/server";

export default auth((req: NextRequest) => {
  // @ts-ignore
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (!isLoggedIn && !isAuthPage) {
    const authUrl = new URL(
      `${process.env.BASE_PATH}/auth/signin`,
      process.env.BASE_URL
    );
    authUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(authUrl);
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(
      new URL(process.env.BASE_PATH || "/", process.env.BASE_URL)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
