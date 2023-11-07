import Head from 'next/head';
// import FunctionalComponent from "../app/components/Subscribe/FunctionalComponent";
import ProfessionalComponent from '../app/components/Subscribe/ProfessionalComponent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function SubscribeFunctional(dataJobPosition) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Subscribe Professional',
          metaDescription: 'Gyloop - Subscribe Professional',
          metaKeywords: 'Gyloop - Subscribe Professional',
          metaTitle: 'Gyloop - Subscribe Professional',
          metaLocale: 'en-US',
        }}
      />

      <ProfessionalComponent jobPosition={dataJobPosition.dataJobPosition} />
    </>
  );
}

export async function getServerSideProps({ context }) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const fetchData = await fetch('http://159.89.44.46:4000/v1/job/job-position');
  const data = await fetchData.json();
  if (data.data === undefined || data === undefined) {
    return {
      props: {
        dataJobPosition: [],
      },
    };
  }
  const dataJobPosition = data.data;
  return {
    props: {
      dataJobPosition,
    },
  };
}
