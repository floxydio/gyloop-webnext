import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }, { locale: 'deu' }, { locale: 'esp' }, { locale: 'fr' }, { locale: 'ita' }, { locale: 'ned' }, { locale: 'por' }];
}

export const metadata: Metadata = {
  title: 'Gyloop | Make Business Connected',
  description: 'Generated by create next app',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  async function loadMessageTranslate() {
    switch (locale) {
      case 'en':
        return import(`@/translate/en.json`);
      case 'id':
        return import(`@/translate/id.json`);
      case 'deu':
        return import(`@/translate/deu.json`);
      case 'esp':
        return import(`@/translate/esp.json`);
      case 'fr':
        return import(`@/translate/fr.json`);
      case 'ita':
        return import(`@/translate/ita.json`);
      case 'ned':
        return import(`@/translate/ned.json`);
      case 'por':
        return import(`@/translate/por.json`);
      default:
        return import(`@/translate/en.json`);
    }
  }

  messages = (await loadMessageTranslate()).default;

  return (
    <html lang={locale}>
      <body className={inter.className} suppressContentEditableWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
