"use client"
import Head from "next/head";
import Main from "./components/Main/MainComponent";
import MainComponent from "./components/Main/MainComponent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import HeaderNoMenuTransparent from "./components/Header/HeaderNoMenuTransparent";
import MainHeader from "./components/Main/MainHeader";

export default function Home() {


  return (
    // <Language />
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

        <title>Gyloop | Make Business Connected</title>
      </Head>

      <HeaderNoMenuTransparent type = {0} />
      <MainHeader/>
      <MainComponent />
      <Footer />
    </>
  )
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

