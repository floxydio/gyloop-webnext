import { useEffect, useState } from 'react';
import '@/style/style.min.css';
import '@/style/icon.css';
import Carousel from 'react-bootstrap/Carousel';

import { useTranslations } from 'next-intl';
import Link from 'next/link';



export default function MainHeader() {
  const [index, setIndex] = useState(0);
  const t = useTranslations('MainHeader');

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //  console.log(selectedIndex)
  };

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end about-header home-header">
        <div className="container">
          {/* <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
              <div className="carousel-item">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
              <div className="carousel-item">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
            </div>
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
          </div> */}

          {/* Move to carousel react-bootstrap */}
          <Carousel
            controls={false}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <h1 className="title">{t('title')}</h1>
              <p className="subtitle">{t('subtitle')}</p>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="title">{t('title')}</h1>
              <p className="subtitle">{t('subtitle')}</p>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="title">{t('title')}</h1>
              <p className="subtitle">{t('subtitle')}</p>
            </Carousel.Item>
          </Carousel>

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

          <div className="solution-header-button d-flex justify-content-center">
            <Link
              href="/subscribe-professional"
              className="btn gyloop-btn btn-warning text-white"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}


