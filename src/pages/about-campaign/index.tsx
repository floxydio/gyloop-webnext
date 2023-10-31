import CampaignComponent from '@/app/components/Campaign/CampaignComponent';
import FooterCampaign from '@/app/components/Campaign/FooterCampaign';
import HeaderCampaign from '@/app/components/Campaign/HeaderCampaign';
import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import Head from 'next/head';

export default function Campaign({
  dataHeader,
  dataFooter,
  dataHighlight,
  dataCampaign,
  dataCulture,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Campaign Program',
          metaDescription: 'Gyloop - Campaign Program',
          metaKeywords: 'Gyloop - Campaign Program',
          metaTitle: 'Gyloop - Campaign Program',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderCampaign dataHeader={dataHeader} />
      <CampaignComponent
        dataCampaign={dataCampaign}
        dataCulture={dataCulture}
        dataHighlight={dataHighlight}
      />
      <FooterCampaign dataFooter={dataFooter} />
    </>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchHighlight = await axios.get(
    `http://localhost:4000/v1/about/highlight?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchCampaign = await axios.get(
    `http://159.89.44.46:4000/v1/about/campaign`
  );
  const fetchCulture = await axios.get(
    `http://localhost:4000/v1/about/culture?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchFooter = await axios.get(
    `http://159.89.44.46:4000/v1/main/homepage-footer`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchHighlight.data.data === undefined ||
    fetchCampaign.data.data === undefined ||
    fetchCulture.data.data === undefined ||
    fetchFooter.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataHighlight: [],
        dataCampaign: [],
        dataCulture: [],
        dataFooter: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataHighlight = fetchHighlight.data.data;
  const dataCampaign = fetchCampaign.data.data;
  const dataCulture = fetchCulture.data.data;
  const dataFooter = fetchFooter.data.data;

  return {
    props: {
      dataHeader: dataHeader,
      dataHighlight: dataHighlight,
      dataCampaign: dataCampaign,
      dataCulture: dataCulture,
      dataFooter: dataFooter,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
