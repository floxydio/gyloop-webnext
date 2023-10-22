import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import ProviderComponent from "@/app/components/Product/Provider/ProviderComponent";
import ProviderHeader from "@/app/components/Product/Provider/ProviderHeader";
import axios from "axios";
import Head from "next/head";

export default function ProviderIndex({ dataHeader, dataFaq }) {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Provider",
        metaDescription: "Gyloop - Provider",
        metaKeywords: "Gyloop - Provider",
        metaTitle: "Gyloop - Provider",
        metaLocale: "en-US"
      }} />

      <HeaderNoMenuTransparent type={0} />
      <ProviderHeader dataHeader={dataHeader[0]} />
      <ProviderComponent dataFaq={dataFaq} />
      <Footer />

    </>
  )
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(`http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=provider`)
  const fetchFaq = await axios.get(`http://localhost:4000/v1/product-faq-item/get?lang_code=${context.locale}&page_code=provider`)

  const dataHeader = fetchHeader.data.data
  const dataFaq = fetchFaq.data.data
  return {
    props: {
      dataHeader: dataHeader,
      dataFaq: dataFaq,
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}
