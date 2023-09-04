import Footer from '../Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import 'popper.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslations } from 'next-intl';
// import t from "@/translate"

export default function MainComponent() {
  const [index, setIndex] = useState(0);
  const t = useTranslations('MainComponent');

  console.log(t);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="home-subheader-1 text-center">
        <div className="container">
          <p className="title">{t('headerTitleFeature')}</p>
          <p className="subtitle">{t('headerSubtitleFeature')}</p>
          <Link href="/Product" className="gyloop-link">
            {t('button')} <i className="fas fa-angle-right"></i>
          </Link>
          <div className="row position-relative">
            <div className="col-8 offset-2 d-none d-md-block position-absolute hr-bc-container">
              <hr />
            </div>

            <div className="col-12 col-md-4">
              <div className="card bg-transparent rounded-0 border-0">
                <div className="card-body">
                  <Image
                    src="/img/icon_home_customer_relationship.png"
                    className="features-image"
                    alt="gyloop-icon-home-customer-relationship"
                    width={0}
                    height={0}
                    sizes="100"
                  />
                  <div className="card-title">{t('firstTitleFeature')}</div>
                  <div className="card-text">{t('firstSubtitleFeature')}</div>
                  <Link href="/Product/Business?t=crm" className="gyloop-link">
                    {t('button')} <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <Link locale="id" href="/id/Main">
              Switch to Indonesia
            </Link>
            <Link locale="en" href="/en/Main">
              Switch to English
            </Link>
            <Link locale="fr" href="">
              Switch to Francais
            </Link>
            <Link locale="esp" href="">
              Switch to Espanyol
            </Link>
            <Link locale="deu" href="">
              Switch to Deutsch
            </Link>
            <Link locale="ita" href="">
              Switch to Italiao
            </Link>
            <Link locale="ned" href="">
              Switch to Nederlands
            </Link>
            <Link locale="por" href="">
              Switch to Portugues
            </Link>

            <div className="col-12 d-md-none">
              <hr className="hr-small bg-blue" />
            </div>

            <div className="col-12 col-md-4">
              <div className="card bg-transparent rounded-0 border-0">
                <div className="card-body">
                  <Image
                    src="/img/icon_home_business_network.png"
                    className="features-image"
                    alt="gyloop-icon-home-business-network"
                    width={0}
                    height={0}
                    sizes="100"
                  />
                  <div className="card-title">{t('secondTitleFeature')}</div>
                  <div className="card-text">{t('secondSubtitleFeature')}</div>
                  <Link href="/Product/Network" className="gyloop-link">
                    {t('button')} <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 d-md-none">
              <hr className="hr-small bg-blue" />
            </div>

            <div className="col-12 col-md-4">
              <div className="card bg-transparent rounded-0 border-0">
                <div className="card-body">
                  <Image
                    src="/img/icon_home_supplier_relationship.png"
                    className="features-image"
                    alt="gyloop-icon-home-supplier"
                    width={0}
                    height={0}
                    sizes="100"
                  />
                  <div className="card-title">{t('thirdTitleFeature')}</div>
                  <div className="card-text">{t('thirdSubtitleFeature')}</div>
                  <Link href="/Product/Business?t=srm" className="gyloop-link">
                    {t('button')} <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="business-feature home-feature-1">
        <div className="container">
          <div className="content">
            <h5 className="title">
              Generate leads and manage source of supply at the same platform,
              and connect to them all.
            </h5>

            <p className="text">
              We are not only providing you the innovative cloud application to
              manage your sales and procurement activities, but also connecting
              you to your business partners: get their product updates, new
              pricing, catalog released, and automate the business transaction
              documents.
            </p>
            <Link href="/Solutions" className="gyloop-link d-block">
              {t('button')}
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="business-feature home-feature-2">
        <div className="container">
          <div className="content">
            <h5 className="title">Lean, Automated, and Integrated</h5>
            <p className="subtitle">Improve your productivity</p>

            <p className="text">
              When a rich feature of CRM meet with a powerful SRM application in
              online business networks, it could be auto generate the sales
              document from one company based on purchase document in another
              company whatever their back end systems are used.
            </p>
            <p className="text">
              When all customer and supplier in business transaction are use the
              same business platform for their data flows, it could be
              standardize the process and make the monitoring & tracing the
              document are easier to be managed, and raise the Standard Level
              Agreement (SLA) of both parties for better services.
            </p>

            <Link href="/Solutions" className="gyloop-link d-block">
              {t('button')}
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="business-feature home-feature-3">
        <div className="container d-flex justify-content-md-end">
          <div className="content">
            <h5 className="title">Rich Features with Max Impacts</h5>
            <p className="subtitle">It’s not a tools, it’s a robust process</p>

            <p className="text">
              Gyloop has been developed by customer experiences, and bring
              customer value on top of application features. Major business use
              case transactions are ready to used in this platform, and built
              with providing maximum change impacts.
            </p>
            <p className="text">
              Gyloop has been designed to give you best experience to run your
              business, to connect with your partners, and leverage business
              opportunity at the same time. You will adopt the revolutionary
              business application to robust your business processes.
            </p>

            <Link href="/Solutions" className="gyloop-link d-block">
              {t('button')}
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="billing-automation-swiper swiper-home">
        <div className="container">
          <h2 className="title">Powerful and Super Easy to Use</h2>

          {/* <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators bullets">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  className="img-fluid"
                  src="/img/video_player_placeholder.gif"
                  alt="Video Placeholder-1"
                  width={0}
                  height={0}
                  sizes="100"

                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  className="img-fluid"
                  src="/img/video_player_placeholder.gif"
                  alt="Video Placeholder-2"
                  width={0}
                  height={0}
                  sizes="100"

                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  className="img-fluid"
                  src="/img/video_player_placeholder.gif"
                  alt="Video Placeholder-3"
                  width={0}
                  height={0}
                  sizes="100"
                />
              </div>
            </div>
          </div> */}
          <ol className="carousel-indicators bullets">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              onClick={() => setIndex(0)}
              className={index === 0 ? 'active' : ''}
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              onClick={() => setIndex(1)}
              className={index === 1 ? 'active' : ''}
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              onClick={() => setIndex(2)}
              className={index === 2 ? 'active' : ''}
            ></li>
          </ol>
          <Carousel
            className="slide"
            controls={false}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <Image
                className="img-fluid"
                src="/img/video_player_placeholder.gif"
                alt="Video Placeholder-1"
                width={0}
                height={0}
                sizes="100"
                style={{ width: '100%', height: 'auto' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="img-fluid"
                src="/img/video_player_placeholder.gif"
                alt="Video Placeholder-1"
                width={0}
                height={0}
                sizes="100"
                style={{ width: '100%', height: 'auto' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="img-fluid"
                src="/img/video_player_placeholder.gif"
                alt="Video Placeholder-1"
                width={0}
                height={0}
                sizes="100"
                style={{ width: '100%', height: 'auto' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="business-cta">
        <div className="container">
          <h3 className="title">Start your planning, and feel the change</h3>
          <Link href="/Product" className="gyloop-link">
            <i className="far fa-chevron-circle-right"></i>
            Get Started
          </Link>
        </div>
      </div>

      <div className="business-feature home-future">
        <div className="container">
          <Image
            src="/img/icon_home_future.png"
            className="features-image"
            alt="gyloop-icon-home-future"
            width={0}
            height={0}
            sizes="100"
          />

          <div className="row">
            <div className="col-12 col-md-6 pr-md-0">
              <h4 className="title">The Future is coming now</h4>
              <p className="text">
                Sales and procurement process are now different, the business
                has been changed. Currently, we are facing the situation when
                B2B business model are performed as like B2C, these competition
                are now like marketplace, the seamless data integration and
                simplicity are the key to be the winner!
              </p>

              <h4 className="title">Why Gyloop meet to your requirements?</h4>
              <p className="text">
                Gyloop provides extraordinary business feature with affordable
                price! You will get a better application with cheaper price use
                software-as-a-service model, it could be implemented faster, and
                easier to use!
              </p>
            </div>
          </div>

          <Link href="/Product" className="gyloop-link d-block">
            {t('button')}
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
