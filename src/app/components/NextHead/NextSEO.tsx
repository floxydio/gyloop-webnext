import Head from "next/head";

interface HeadPropsSEO {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
  metaLocale: string;
}



export default function NextSEO({ seoHead }: { seoHead: HeadPropsSEO }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta name="description" content={seoHead.metaDescription} />
      <meta name="keywords" content={seoHead.metaKeywords} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>{seoHead.title}</title>
      <meta property="og:title" content={seoHead.metaTitle} />
      <meta property="og:description" content={seoHead.metaDescription} />
      <meta name="theme-color" content="#12AAF2" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={seoHead.title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="msapplication-navbutton-color" content="#12AAF2" />
      <meta name="msapplication-TileColor" content="#12AAF2" />
      <meta
        name="msapplication-TileImage"
        content="icons/ms-icon-144x144.png"
      />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />
      <meta name="nightmode" content="disable" />
      <meta name="layoutmode" content="fitscreen/standard" />
      <meta name="imagemode" content="force" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seoHead.metaLocale} />
      <meta property="og:site_name" content="Gyloop" />
    </Head>
  )
}
