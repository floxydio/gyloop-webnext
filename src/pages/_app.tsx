import {NextIntlClientProvider} from 'next-intl';
 
export default function App({Component, pageProps}) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}