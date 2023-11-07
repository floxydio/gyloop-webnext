import CultureDetail from '@/app/components/Culture/CultureDetail';
import CampaignTitle from '@/app/components/Culture/CultureTitle';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function DetailCampaign({ data }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Campaign',
          metaDescription: 'Gyloop - Campaign',
          metaKeywords: 'Gyloop - Campaign',
          metaTitle: 'Gyloop - Campaign',
          metaLocale: 'en-US',
        }}
      />
      <HeaderNoMenuTransparent type={1} />
      <CampaignTitle title="Campaign Program" />
      <CultureDetail feature={data.data} />
    </>
  );
}

export async function getStaticPaths() {
  const fetchData = await axios.get(
    `http://159.89.44.46:4000/v1/about/culture`
  );
  const dataCampaign = await fetchData.data.data;
  const paramLeaderId = dataCampaign.map((e) => ({
    params: { id: e.id.toString() },
  }));

  return { paths: paramLeaderId, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const fetchDetail = await axios.get(
    `http://159.89.44.46:4000/v1/about/culture/detail/${params.id}`
  );

  if (fetchDetail.data.data === undefined || fetchDetail.data === undefined) {
    return {
      props: {
        data: [],
      },
    };
  }

  const data = fetchDetail.data;

  return {
    props: {
      data,
    },
  };
}
