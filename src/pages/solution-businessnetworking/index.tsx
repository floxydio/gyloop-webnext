import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import BusinessNetworkingComponent from "@/app/components/Solution/BusinessNetworking/BusinessNetworking";
import Head from "next/head";

export default function BusinessNetworking() {
  return (
    <>
     
      <NextSEO seoHead={{
        title: "Gyloop - Business Networking",
        metaDescription: "Gyloop - Business Networking",
        metaKeywords: "Gyloop - Business Networking",
        metaTitle: "Gyloop - Business Networking",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type = {0} />
      <BusinessNetworkingComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}
