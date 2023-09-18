import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenu from "@/app/components/Header/HeaderNoMenu";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipComponent from "@/app/components/Leadership/LeadershipComponent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";

export default function Leadership() {
    return (
        <>

            <NextSEO seoHead={{
                title: "Gyloop - Leadership",
                metaDescription: "Gyloop - Leadership",
                metaKeywords: "Gyloop - Leadership",
                metaTitle: "Gyloop - Leadership",
                metaLocale: "en-US"
            }} />



            <HeaderNoMenuTransparent type = {1} />
            <LeadershipTitle title="Leadership" />
            <LeadershipComponent />
            <Footer />  


        </>
    )
}
