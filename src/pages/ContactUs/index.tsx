import ContactUsComponent from "@/app/components/ContactUs/ContactUsComponent";
import NextSEO from "@/app/components/NextHead/NextSEO";
import Head from "next/head";

export default function ContactUs() {
    return (
        <>

            <NextSEO seoHead={{
                title: "Gyloop - Contact Us",
                metaDescription: "Gyloop - Contact Us",
                metaKeywords: "Gyloop - Contact Us",
                metaTitle: "Gyloop - Contact Us",
                metaLocale: "en-US"
            }}/>
            <ContactUsComponent />  

        </>
    )
}
