import Footer from '@/app/components/Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import ConnectorComponent from '@/app/components/Product/Connector/ConnectorComponent';
import HeaderConnector from '@/app/components/Product/Connector/HeaderComponent';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import FooterConnector from '@/app/components/Product/Connector/FooterConnector';
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

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFeature = await axios.get(
    `http://159.89.44.46:4000/v1/product-feature/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchMediaHighlight = await axios.get(
    `http://159.89.44.46:4000/v1/main/media?page_code=connector`
  );
  const fetchPricingItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchTablePlan = await axios.get(
    `http://159.89.44.46:4000/v1/product-table-plan/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchProductDetail = await axios.get(
    `http://159.89.44.46:4000/v1/product-detail/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFaqHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-faq-header/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFaqItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-faq-item/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchProductFunction = await axios.get(
    `http://159.89.44.46:4000/v1/product-functionality/get?lang_code=${context.locale}&page_code=connector`
  );
  const fetchFooter = await axios.get(
    `http://159.89.44.46:4000/v1/main/homepage-footer`
  );

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
      dataHeader: dataHeader,
      dataFeature: dataFeature,
      dataMedia: dataMedia,
      dataFetchPrice: dataFetchPrice,
      dataTablePlan: dataTablePlan,
      dataProductDetail: dataProductDetail,
      dataFaqHeader: dataFaqHeader,
      dataFaqItem: dataFaqItem,
      dataProductFunction: dataProductFunction,
      dataFooter: dataFooter,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
