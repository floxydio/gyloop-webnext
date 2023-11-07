/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    CORE_URL: 'http://159.89.44.46:4000',
    BLOG_URL: 'http://159.89.44.46:4500',
    SYSTEM_URL: 'http://159.89.44.46:4200',
    LIBRARY_URL: 'http://159.89.44.46:4400',
    AUTH_URL: 'http://159.89.44.46:4800',
    REACT_PROD_URL: 'https://gyloop-webnext.vercel.app/Main',
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
  eslint: {
    ignoreDuringBuilds: true
  },
  redirects: async () => {
    return [
      {
        source: '/Main',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
