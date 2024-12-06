import { handlers } from "../../../../auth";
import { NextRequest } from "next/server";

// const basePath = process.env.BASE_PATH ?? "";

// // This example is hosted under a subdomain, so this is required
// // This is not relevant in the actual source code of the template, therefore it is omitted from there
// // See https://github.com/nextauthjs/next-auth/discussions/12160
// function rewriteRequest(request: NextRequest): NextRequest {
//   const { protocol, host, pathname } = request.nextUrl;

//   const headers = request.headers;
//   // Host rewrite adopted from next-auth/packages/core/src/lib/utils/env.ts:createActionURL
//   const detectedHost = headers.get("x-forwarded-host") ?? host;
//   const detectedProtocol = headers.get("x-forwarded-proto") ?? protocol;
//   const _protocol = detectedProtocol.endsWith(":")
//     ? detectedProtocol
//     : `${detectedProtocol}:`;
//   const url = new URL(
//     `${_protocol}//${detectedHost}${basePath}${pathname}${request.nextUrl.search}`
//   );

//   return new NextRequest(url, request);
// }

// export async function GET(request: NextRequest) {
//   return await handlers.GET(rewriteRequest(request));
// }

// export async function POST(request: NextRequest) {
//   return await handlers.POST(rewriteRequest(request));
// }

export const { GET, POST } = handlers;
