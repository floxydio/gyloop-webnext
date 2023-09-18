import Footer from '@/app/components/Footer/Footer'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle'
import NextSEO from '@/app/components/NextHead/NextSEO'
import AgreementComponent from '@/app/components/Subscribe/AgreementComponent'
import Head from 'next/head'

export default function SubscriptionAgreement() {
    return (
        <>

            <NextSEO seoHead={{
                title: "Gyloop - Subscription Agreement",
                metaDescription: "Gyloop - Subscription Agreement",
                metaKeywords: "Gyloop - Subscription Agreement",
                metaTitle: "Gyloop - Subscription Agreement",
                metaLocale: "en-US"
            }} />

            <HeaderNoMenuTransparent type={1} />
            <LeadershipTitle title="Leadership" />

            <AgreementComponent />
            <Footer />

        </>

    )
}
