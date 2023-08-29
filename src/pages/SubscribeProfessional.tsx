import Head from 'next/head';
// import FunctionalComponent from "../app/components/Subscribe/FunctionalComponent";
import ProfessionalComponent from '../app/components/subscribe/ProfessionalComponent';

export default function SubscribeFunctional() {
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
        <title>Gyloop - Subscribe Professional</title>
      </Head>
      <ProfessionalComponent />
    </>
  );
}
