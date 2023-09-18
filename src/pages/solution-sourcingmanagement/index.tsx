import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import SourcingComponent from "@/app/components/Solution/SourcingManagement/SourcingComponent";
import Head from "next/head";

export default function SourcingManagement() {
  return (
    <>
  
            <NextSEO seoHead={{
                title: "Gyloop - Sourcing Management",
                metaDescription: "Gyloop - Sourcing Management",
                metaKeywords: "Gyloop - Sourcing Management",
                metaTitle: "Gyloop - Sourcing Management",
                metaLocale: "en-US"
            }}/>


            <HeaderNoMenuTransparent type = {0} />
            <SourcingComponent />
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