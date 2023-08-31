import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenu from "@/app/components/Header/HeaderNoMenu";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipComponent from "@/app/components/Leadership/LeadershipComponent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import Head from "next/head";

export default function Leadership() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />

                <title>Gyloop - Leadership</title>
            </Head>


            <HeaderNoMenuTransparent type = {1} />
            <LeadershipTitle title="Leadership" />
            <LeadershipComponent />
            <Footer />  


        </>
    )
}
