/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    REACT_DEV_URL: 'http://localhost:3000',
    REACT_PROD_URL: 'https://nextjs-portfolio-website-ten.vercel.app',
    IMAGE_HOME: 'http://localhost:4000/v1/image-home/',
    IMAGE_ABOUT: 'http://localhost:4000/v1/image-about/',
    IMAGE_PRODUCT: 'http://localhost:4000/v1/image-product/',
  },
  compiler: {
    reactRemoveProperties: true,
  },
  i18n: {
    locales: ['en', 'id', 'deu', 'esp', 'fr', 'ita', 'ned', 'por'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  swcMinify: true,
  images: {
    domains: ['localhost', '127.0.0.1'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/Main',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
