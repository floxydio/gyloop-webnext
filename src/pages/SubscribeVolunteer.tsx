import NextSEO from "@/app/components/NextHead/NextSEO";
import VolunteerComponent from "@/app/components/Subscribe/VolunteerComponent";
import Head from "next/head";

export default function SubscribeVolunteer() {
  return (
  <>

    <NextSEO seoHead={{
      title: "Gyloop - Subscribe Volunteer",
      metaDescription: "Gyloop - Subscribe Volunteer",
      metaKeywords: "Gyloop - Subscribe Volunteer",
      metaTitle: "Gyloop - Subscribe Volunteer",
      metaLocale: "en-US"
    }} />
    <VolunteerComponent />
  
  </>
  )
}
