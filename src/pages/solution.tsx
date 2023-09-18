import Footer from '@/app/components/Footer/Footer'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'
import NextSEO from '@/app/components/NextHead/NextSEO'
import SolutionIndexComponent from '@/app/components/Solution/IndexComponent'
import Head from 'next/head'

export default function Solution() {
    return (
        <>
        <NextSEO seoHead={{
                title: "Gyloop - Solution",
                metaDescription: "Gyloop - Solution",
                metaKeywords: "Gyloop - Solution",
                metaTitle: "Gyloop - Solution",
                metaLocale: "en-US"
                }}/>

            <HeaderNoMenuTransparent type={0} />
            <SolutionIndexComponent />
            <Footer />

        </>
    )
}
