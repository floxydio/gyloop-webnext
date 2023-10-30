import CampaignComponent from "@/app/components/Campaign/CampaignComponent";
import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";

export default function Campaign() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Campaign Program",
        metaDescription: "Gyloop - Campaign Program",
        metaKeywords: "Gyloop - Campaign Program",
        metaTitle: "Gyloop - Campaign Program",
        metaLocale: "en-US"
      }} />

      <HeaderNoMenuTransparent type={0} />
      <CampaignComponent />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}