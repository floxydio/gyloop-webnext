import { useRouter } from 'next/router'
import LeadershipDetailComponent from '@/app/components/Leadership/LeadershipDetail'
import Head from 'next/head'
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu'
import Footer from '@/app/components/Footer/Footer'
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'
import NextSEO from '@/app/components/NextHead/NextSEO'

export default function DetailLeadership() {
  const router = useRouter()

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

      <LeadershipDetailComponent />
      <Footer />
    </>
  )
}
