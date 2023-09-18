import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenu from "@/app/components/Header/HeaderNoMenu";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import NewsEventDetailComponent from "@/app/components/NewsAndEvent/NewsEventDetail";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";

export default function NewsAndEventDetail() {
    return (
        <>
     

            <NextSEO seoHead={{
                title: "Gyloop - News And Event Detail",
                metaDescription: "Gyloop - News And Event Detail",
                metaKeywords: "Gyloop - News And Event Detail",
                metaTitle: "Gyloop - News And Event Detail",
                metaLocale: "en-US"
            }} />



            <HeaderNoMenuTransparent type = {1} />
            <LeadershipTitle title="News" />
            <NewsEventDetailComponent />
            <Footer />


        </>
    )
}
