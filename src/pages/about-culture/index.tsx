import CultureComponent from "@/app/components/Culture/CultureComponent";
import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";

export default function index() {
    return (
        <> <NextSEO seoHead={{
                title: "Gyloop - Culture",
                metaDescription: "Gyloop - Culture",
                metaKeywords: "Gyloop - Culture",
                metaTitle: "Gyloop - Culture",
                metaLocale: "en-US"
            }} />


            <HeaderNoMenuTransparent type = {0} />
            <CultureComponent />
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
