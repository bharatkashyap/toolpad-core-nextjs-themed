import * as React from "react";
import type { Metadata } from "next";
import { NextAppProvider } from "@toolpad/core/nextjs";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Navigation } from "@toolpad/core/AppProvider";
import { SessionProvider, signIn, signOut } from "next-auth/react";
import theme from "../theme";
import { auth } from "../auth";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    segment: "toolpad/core/templates/nextjs-dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "toolpad/core/templates/nextjs-dashboard/orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "toolpad/core/templates/nextjs-dashboard/employees",
    title: "Employees",
    icon: <PersonIcon />,
    pattern: "employees{/:employeeId}*",
  },
];

const AUTHENTICATION = {
  signIn,
  signOut,
};

export const metadata: Metadata = {
  title: "Toolpad Core + Next.js App",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <SessionProvider
          session={session}
          baseUrl={process.env.BASE_URL}
          basePath={`${process.env.BASE_PATH}/api/auth`}
        >
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <NextAppProvider
              theme={theme}
              navigation={NAVIGATION}
              session={session}
              authentication={AUTHENTICATION}
            >
              {children}
            </NextAppProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
