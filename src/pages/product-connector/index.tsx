import Footer from '@/app/components/Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import ConnectorComponent from '@/app/components/Product/Connector/ConnectorComponent';
import HeaderConnector from '@/app/components/Product/Connector/HeaderComponent';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
export default function Connector({ dataHeader }) {


  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Connector",
        metaDescription: "Gyloop - Connector",
        metaKeywords: "Gyloop - Connector",
        metaTitle: "Gyloop - Connector",
        metaLocale: "en-US"
      }} />

      <HeaderNoMenuTransparent type={0} />
      <HeaderConnector dataHeader={dataHeader[0]} />
      <ConnectorComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(`http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=connector`)
  const dataHeader = fetchHeader.data.data
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}
