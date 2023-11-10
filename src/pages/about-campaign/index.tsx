import baseUrl from '@/Constant/server_config';
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
      <HeaderCampaign dataHeader={dataHeader[0]} />
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
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const fetchHeader = await axios.get(
    `${url}/v1/product-header/get?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchHighlight = await axios.get(
    `${url}/v1/about/highlight?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchCampaign = await axios.get(
    `${url}/v1/about/campaign`
  );
  const fetchCulture = await axios.get(
    `${url}/v1/about/culture?lang_code=${context.locale}&page_code=campaign`
  );
  const fetchFooter = await axios.get(
    `${url}/v1/main/homepage-footer`
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
