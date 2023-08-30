/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        REACT_DEV_URL: "http://localhost:3000",
        REACT_PROD_URL: "https://nextjs-portfolio-website-ten.vercel.app",
    },
    compiler: {
        reactRemoveProperties: true,
    },
    swcMinify: true,
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/main",
                permanent: true,
            },
        ]
    }



}

module.exports = nextConfig
