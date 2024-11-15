// @ts-check

export default (phase) => {
  const isDev = phase === "phase-development-server";
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: process.env.BASE_PATH,
    assetPrefix: isDev
      ? undefined
      : `${process.env.BASE_URL}${process.env.BASE_PATH}`,
  };
  return nextConfig;
};
