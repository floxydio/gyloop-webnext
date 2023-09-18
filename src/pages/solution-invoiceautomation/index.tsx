import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import InvoiceAutomationComponent from '@/app/components/Solution/InvoiceAutomation/InvoiceAutomation';
import Head from 'next/head';

export default function InvoiceAutomation() {
  <>
    <NextSEO seoHead={{
      title: "Gyloop - Invoice Automation",
      metaDescription: "Gyloop - Invoice Automation",
      metaKeywords: "Gyloop - Invoice Automation",
      metaTitle: "Gyloop - Invoice Automation",
      metaLocale: "en-US"
  
    }}/>


    <HeaderNoMenuTransparent type = {0} />
    <InvoiceAutomationComponent />
    <Footer />
  </>
}
