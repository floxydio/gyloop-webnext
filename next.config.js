/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    REACT_DEV_URL: 'http://159.89.44.46:4000',
    REACT_PROD_URL: 'https://nextjs-portfolio-website-ten.vercel.app',
    IMAGE_HOME: 'http://159.89.44.46:4000/v1/image-home/',
    IMAGE_ABOUT: 'http://159.89.44.46:4000/v1/image-about/',
    IMAGE_PRODUCT: 'http://159.89.44.46:4000/v1/image-product/',
    IMAGE_SOLUTION: 'http://159.89.44.46:4000/v1/image-solution/',
  },
  i18n: {
    locales: ['en', 'id', 'deu', 'esp', 'fr', 'ita', 'ned', 'por'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  swcMinify: true,
  images: {
    domains: ['localhost', '127.0.0.1', '159.89.44.46:4000', '159.89.44.46'],
    minimumCacheTTL: 60,
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
