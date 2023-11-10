/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    REACT_DEV_URL: 'http://159.89.44.46:4000',
    SERVER_TYPE: 'prod',
    BASE_URL_DEV: 'http://159.89.44.46',
    BASE_URL_PROD: 'https://apidev.gyloop.com',
    BASE_URL_LOCAL: 'http://localhost',
    PORT_CORE: '4000',
    PORT_AUTH: '4800',
    PORT_BLOG: '4500',
    PORT_LIB: '4400',
    PORT_SYSTEM: '4200',
    PORT_CORE_PROD: 'core',
    PORT_AUTH_PROD: 'auth',
    PORT_BLOG_PROD: 'blog',
    PORT_LIB_PROD: 'lib',
    PORT_SYSTEM_PROD: 'system',
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
    domains: ['localhost', '127.0.0.1', '159.89.44.46:4000', '159.89.44.46', 'https://apidev.gyloop.com/', 'apidev.gyloop.com'],
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/Main',
        permanent: true,
      },

    ]
  },
};

module.exports = nextConfig;
