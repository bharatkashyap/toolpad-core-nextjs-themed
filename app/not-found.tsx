"use client";
import Link from "next/link";
import { redirect } from "next/navigation";

// A hack to trigger a refresh upon sign in
// This is only needed since this app is hosted under a proxy
// The `redirect` function doesn't trigger a fetch of the component bundle
// and causes a 404 to appear
// Omitted from the actual example
export default function NotFound() {
  // const url = new URL(window.location.href);
  // const callbackUrl = url.searchParams.get("callbackUrl") || "/";
  // return redirect(callbackUrl);
  return <p>404: Not Found</p>;
}
