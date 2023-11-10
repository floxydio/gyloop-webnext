import Footer from "@/app/components/Footer/Footer";
import HeaderNoMenu from "@/app/components/Header/HeaderNoMenu";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import LeadershipTitle from "@/app/components/Leadership/LeadershipTitle";
// import NewsEventDetailComponent from "@/app/components/NewsAndEvent/NewsEventDetail";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import HeaderDetail from "@/app/components/Header/HeaderDetail";

const NewsEventDetailComponent = dynamic(
    () => import('@/app/components/NewsAndEvent/NewsEventDetail'),
    { ssr: false }
)

export default function NewsAndEventDetail() {
    const router = useRouter();
    return (
        <>
            <NextSEO seoHead={{
                title: "Gyloop - News And Event Detail",
                metaDescription: "Gyloop - News And Event Detail",
                metaKeywords: "Gyloop - News And Event Detail",
                metaTitle: "Gyloop - News And Event Detail",
                metaLocale: "en-US"
            }} />

            <HeaderDetail />
            <LeadershipTitle title="News" />
            <NewsEventDetailComponent id={Number(router.query.id)} />
            <Footer />
        </>
    )
}
