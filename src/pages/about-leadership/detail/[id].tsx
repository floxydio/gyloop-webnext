import { useRouter } from 'next/router'
import LeadershipDetailComponent from '@/app/components/Leadership/LeadershipDetail'
import Head from 'next/head'
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu'
import Footer from '@/app/components/Footer/Footer'
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'

export default function DetailLeadership() {
  const router = useRouter()

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

      <LeadershipDetailComponent />
      <Footer />
    </>
  )
}
