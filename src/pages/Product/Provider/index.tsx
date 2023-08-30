import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import ProviderComponent from "@/app/components/Product/Provider/ProviderComponent";
import ProviderHeader from "@/app/components/Product/Provider/ProviderHeader";
import Head from "next/head";

export default function ProviderIndex() {
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

                <title>Gyloop - Provider</title>
            </Head>
            <HeaderNoMenuTransparent type = {0} />
            <ProviderHeader />
            <ProviderComponent />
            <Footer />

        </>
    )
}
