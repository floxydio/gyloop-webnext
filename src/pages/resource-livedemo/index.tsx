import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import SystemDemoComponent from '@/app/components/Resources/SystemDemo/SystemDemoComponent';
import Head from 'next/head';

export default function LiveDemo() {
  return (
    <>
    
      <NextSEO seoHead={{
        title: "Gyloop - System Demo",
        metaDescription: "Gyloop - System Demo",
        metaKeywords: "Gyloop - System Demo",
        metaTitle: "Gyloop - System Demo",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type={0} />
      <SystemDemoComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
