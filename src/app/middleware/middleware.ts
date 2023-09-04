import createMiddleware from 'next-intl/middleware';

const storageLocale = localStorage.getItem("lang")

export default createMiddleware({
    locales: ['en', 'id', 'deu', 'esp', 'fr', 'ita', 'ned', 'por'],

    defaultLocale: storageLocale === undefined ? "en" : `${storageLocale}`,
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
