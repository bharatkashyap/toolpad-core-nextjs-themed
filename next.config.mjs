// @ts-check

export default (phase) => {
  const isDev = phase === "phase-development-server";
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: isDev
      ? undefined
      : `${process.env.BASE_URL}${process.env.BASE_PATH}`,
    experimental: {
      serverActions: {
        // https://github.com/vercel/next.js/issues/58019
        // edit: updated to new key. Was previously `allowedForwardedHosts`
        allowedOrigins: [
          "toolpad-core-nextjs-themed.vercel.app",
          "deploy-preview-4415--mui-toolpad-docs.netlify.app",
          "mui-toolpad-docs.netlify.app",
          "mui.com",
        ],
      },
    },
  };
  return nextConfig;
};
