/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => {
    return [
      {
        source: "/news",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
