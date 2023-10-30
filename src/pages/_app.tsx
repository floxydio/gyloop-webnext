import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local'


/*
@font-face {
  font-family: "Compact-Ultralight";
  src: url("../../public/font/SFCompactDisplay-Ultralight.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Thin";
  src: url("../../public/font/SFCompactDisplay-Thin.woff");
  font-display: swap;
}
@font-face {
  font-family: "Compact-Light";
  src: url("../../public/font/SFCompactDisplay-Light.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Regular";
  src: url("../../public/font/SFCompactDisplay-Regular.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Medium";
  src: url("../../public/font/SFCompactDisplay-Medium.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Semibold";
  src: url("../../public/font/SFCompactDisplay-Semibold.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Bold";
  src: url("../../public/font/SFCompactDisplay-Bold.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Heavy";
  src: url("../../public/font/SFCompactDisplay-Heavy.woff");
  font-display: swap;

}
@font-face {
  font-family: "Compact-Black";
  src: url("../../public/font/SFCompactDisplay-Black.woff");
  font-display: swap;

}
@font-face {
  font-family: "Pro-Regular";
  src: url("../../public/font/SFProText-Regular.woff");
  font-display: swap;

}

*/

const font = localFont({
  src: [
    {
      path: '../../public/font/SFCompactDisplay-Ultralight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Thin.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Light.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/SFCompactDisplay-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/SFProText-Regular.woff',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  );
}