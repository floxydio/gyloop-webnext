import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import NextSEO from "@/app/components/NextHead/NextSEO";
import VideoComponent from "@/app/components/Video/VideoComponent";
import Head from "next/head";

export default function Video() {
  return (
    <>

    <NextSEO seoHead={{
        title: "Gyloop - Video",
        metaDescription: "Gyloop - Video",
        metaKeywords: "Gyloop - Video",
        metaTitle: "Gyloop - Video",
        metaLocale: "en-US"
    }} />



    <HeaderNoMenuTransparent type = {1} />
    <LeadershipTitle title="Video" />
    <VideoComponent />
    <Footer />  


</>
  )
}
