import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import ProviderComponent from "@/app/components/Product/Provider/ProviderComponent";
import ProviderHeader from "@/app/components/Product/Provider/ProviderHeader";
import Head from "next/head";

export default function ProviderIndex() {
    return (
        <>
            <NextSEO seoHead={{
                title: "Gyloop - Provider",
                metaDescription: "Gyloop - Provider",
                metaKeywords: "Gyloop - Provider",
                metaTitle: "Gyloop - Provider",
                metaLocale: "en-US"
            }}/>

            <HeaderNoMenuTransparent type = {0} />
            <ProviderHeader />
            <ProviderComponent />
            <Footer />

        </>
    )
}

export async function getStaticProps(context) {
    return {
      props: {
        messages: (await import(`@/translate/${context.locale}.json`)).default
      }
    };
  }
