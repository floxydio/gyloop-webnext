import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import VideoComponent from "@/app/components/Video/VideoComponent";
import Head from "next/head";

export default function Video() {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <title>Gyloop - Video</title>
    </Head>


    <HeaderNoMenuTransparent type = {1} />
    <LeadershipTitle title="Video" />
    <VideoComponent />
    <Footer />  


</>
  )
}
