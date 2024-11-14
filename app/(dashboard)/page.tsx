import * as React from "react";
import DashboardContent from "./DashboardContent";
import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    const headersList = headers();
    const fullUrl =
      headersList.get("x-url") || headersList.get("x-invoke-path") || "";

    const authUrl = new URL(
      `${process.env.BASE_PATH || ""}/auth/signin`,
      process.env.BASE_URL
    );
    authUrl.searchParams.set(
      "callbackUrl",
      `${process.env.BASE_URL}${fullUrl}`
    );

    redirect(authUrl.href);
  }
  return <DashboardContent />;
}
