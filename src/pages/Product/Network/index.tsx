import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import NetworkComponent from "@/app/components/Product/Network/NetworkComponent";
import NetworkHeader from "@/app/components/Product/Network/NetworkHeader";
import Head from "next/head";

export default function NetworkIndex() {
  return (
    <>
    
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <title>Gyloop - Network</title>
      </Head>

      <HeaderNoMenuTransparent />
      <NetworkHeader />
      <NetworkComponent />

      <Footer />
    
    
    </>
  )
}
