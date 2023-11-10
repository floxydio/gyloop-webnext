import Footer from '@/app/components/Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import ConnectorComponent from '@/app/components/Product/Connector/ConnectorComponent';
import HeaderConnector from '@/app/components/Product/Connector/HeaderComponent';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import FooterConnector from '@/app/components/Product/Connector/FooterConnector';
import baseUrl from '@/Constant/server_config';
export default function Connector({
  dataHeader,
  dataFetchPrice,
  dataProductFunction,
  dataProductDetail,
  dataFaqHeader,
  dataFaqItem,
  dataFooter,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Connector',
          metaDescription: 'Gyloop - Connector',
          metaKeywords: 'Gyloop - Connector',
          metaTitle: 'Gyloop - Connector',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderConnector dataHeader={dataHeader[0]} />
      <ConnectorComponent
        dataPriceItem={dataFetchPrice}
        dataProductDetail={dataProductDetail}
        dataFaqHeader={dataFaqHeader}
        dataFaqItem={dataFaqItem}
        dataProductFunction={dataProductFunction}
      />
      <FooterConnector dataFooter={dataFooter} />
    </>
  );
}

export async function getServerSideProps(context) {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const fetchHeader = await axios.get(
    `${url}/v1/product-header/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFeature = await axios.get(
    `${url}/v1/product-feature/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchMediaHighlight = await axios.get(
    `${url}/v1/main/media?page_code=connector`
  );
  const fetchPricingItem = await axios.get(
    `${url}/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchTablePlan = await axios.get(
    `${url}/v1/product-table-plan/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchProductDetail = await axios.get(
    `${url}/v1/product-detail/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFaqHeader = await axios.get(
    `${url}/v1/product-faq-header/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFaqItem = await axios.get(
    `${url}/v1/product-faq-item/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchProductFunction = await axios.get(
    `${url}/v1/product-functionality/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFooter = await axios.get(
    `${url}/v1/main/homepage-footer`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchFeature.data.data === undefined ||
    fetchMediaHighlight.data.data === undefined ||
    fetchPricingItem.data.data === undefined ||
    fetchTablePlan.data.data === undefined ||
    fetchProductDetail.data.data === undefined ||
    fetchFaqHeader.data.data === undefined ||
    fetchFaqItem.data.data === undefined ||
    fetchProductFunction.data.data === undefined ||
    fetchFooter.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataFetchPrice: [],
        dataProductFunction: [],
        dataProductDetail: [],
        dataFaqHeader: [],
        dataFaqItem: [],
        dataFooter: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataFeature = fetchFeature.data.data;
  const dataMedia = fetchMediaHighlight.data.data;
  const dataFetchPrice = fetchPricingItem.data.data;
  const dataTablePlan = fetchTablePlan.data.data;
  const dataProductDetail = fetchProductDetail.data.data;
  const dataFaqHeader = fetchFaqHeader.data.data;
  const dataFaqItem = fetchFaqItem.data.data;
  const dataFooter = fetchFooter.data.data;
  const dataProductFunction = fetchProductFunction.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataFeature: dataFeature || null,
      dataMedia: dataMedia || null,
      dataFetchPrice: dataFetchPrice || null,
      dataTablePlan: dataTablePlan || null,
      dataProductDetail: dataProductDetail || null,
      dataFaqHeader: dataFaqHeader || null,
      dataFaqItem: dataFaqItem || null,
      dataProductFunction: dataProductFunction || null,
      dataFooter: dataFooter || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
