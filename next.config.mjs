import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.euphoriagroup.com.eg',
        pathname: '**',
      },
    ],
  }
};

export default withNextIntl(nextConfig);
