import CultureComponent from "@/app/components/Culture/CultureComponent";
import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import Head from "next/head";

export default function index() {
    return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />

                <title>Gyloop - Culture</title>
            </Head>

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
