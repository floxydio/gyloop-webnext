import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BlogComponent from '@/app/components/Resources/Blog/BlogComponent';
import Head from 'next/head';
import React from 'react';

export default function Blogs() {
  return (
    <>

      <NextSEO seoHead={{
        title: "Gyloop - Blogs",
        metaDescription: "Gyloop - Blogs",
        metaKeywords: "Gyloop - Blogs",
        metaTitle: "Gyloop - Blogs",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type={0} />
      <BlogComponent />
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
