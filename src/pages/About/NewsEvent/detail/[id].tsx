import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenu from "@/app/components/Header/HeaderNoMenu";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import NewsEventDetailComponent from "@/app/components/NewsAndEvent/NewsEventDetail";
import Head from "next/head";

export default function NewsAndEventDetail() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />

                <title>Gyloop - News And Event Detail</title>
            </Head>


            <HeaderNoMenu />
            <LeadershipTitle title="News" />
            <NewsEventDetailComponent />
            <Footer />


        </>
    )
}
