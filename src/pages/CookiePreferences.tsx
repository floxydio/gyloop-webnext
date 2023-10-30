import '@/style/style.min.css';
import Footer from '../app/components/Footer/Footer';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

interface CookiePreferencesInterface {
  content: string,
  locale: string,
  createdAt: string,
}

// Trigger

export default function CookiePreferences({ dataCookiePreferences }: { dataCookiePreferences: CookiePreferencesInterface }) {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Cookie Preferences",
        metaDescription: "Gyloop - Cookie Preferences",
        metaKeywords: "Gyloop - Cookie Preferences",
        metaLocale: "en-US",
        metaTitle: "Gyloop - Cookie Preferences"
      }} />
      <>
        <div className="bg-light">
          <div className="container subheader subheader-container">
            <h1 className="title">Cookie Preferences</h1>
          </div>
        </div>

        <div className="mb-5">
          <div className="container privacy-container py-3 pb-md-2 py-xl-4">
            <p className="privacy-update-info">
              This statement wast updated on 31 October 2023
            </p>
            {dataCookiePreferences === undefined ? <p>Data Kosong</p> : <div className="privacy-content" dangerouslySetInnerHTML={{
              __html: dataCookiePreferences.content
            }}>

            </div>}

          </div>
        </div>
        <Footer />
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const fetchData = await axios.get(`http://159.89.44.46:4000/v1/cookie-preferences?lang_code=${context.locale}`)
  if (fetchData.data.data.length === 0) {
    return {
      props: {
        dataCookiePreferences: [],
      },
    };
  }
  const dataCookiePreferences = await fetchData.data.data[0] as CookiePreferencesInterface

  return {
    props: {
      dataCookiePreferences: dataCookiePreferences || null,
    },
  };
}