import * as React from "react";
import DashboardContent from "./DashboardContent";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function Dashboard() {
  // const session = await auth();
  // if (!session) {
  //   const fullUrl = new URL(
  //     `${process.env.BASE_PATH || ""}/`,
  //     process.env.BASE_URL
  //   );

  //   const authUrl = new URL(
  //     `${process.env.BASE_PATH || ""}/auth/signin`,
  //     process.env.BASE_URL
  //   );
  //   authUrl.searchParams.set("callbackUrl", fullUrl.href);

  //   redirect(authUrl.href);
  // }
  return <DashboardContent />;
}
