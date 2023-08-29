"use client"
import Head from "next/head";
import Main from "./components/Main/MainComponent";
import Header from "./components/Header/Header";
import MainComponent from "./components/Main/MainComponent";
import Footer from "./components/Footer/Footer";

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

      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

