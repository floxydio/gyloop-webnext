import VolunteerComponent from "@/app/components/Subscribe/VolunteerComponent";
import Head from "next/head";

export default function SubscribeVolunteer() {
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
    <title>Gyloop - Subscribe Volunteer</title>
  </Head>
    <VolunteerComponent />
  
  </>
  )
}