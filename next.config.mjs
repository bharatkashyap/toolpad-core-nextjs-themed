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
        // edit: updated to new key. Was previously `allowedForwardedHosts`
        allowedOrigins: [
          "https://deploy-preview-4415--mui-toolpad-docs.netlify.app",
          "https://mui-toolpad-docs.netlify.app",
          "https://mui.com",
        ],
      },
    },
  };
  return nextConfig;
};
