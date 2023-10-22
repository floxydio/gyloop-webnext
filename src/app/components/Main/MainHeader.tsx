import { useEffect, useState } from 'react';
import '@/style/style.min.css';
import '@/style/icon.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface HomepageHeaderEntities {
  id: number;
  lang_code: string;
  item_code: string;
  head_text: string;
  head_clor: string;
  shrt_desc: string;
  shrt_clor: string;
  head_text002: string;
  head_clor002: string;
  shrt_desc002: string;
  shrt_clor002: string;
  head_text003: string;
  head_clor003: string;
  shrt_desc003: string;
  shrt_clor003: string;
  length_circle: number;
  img_background: string;
  btn_title: string;
  btn_link: string;
  btn_color: string;
  type_header: number;
  submit_type: number;
  createdAt: Date;
  updatedAt: Date | null;
}

export default function MainHeader({
  dataHomepageHeader,
}: {
  dataHomepageHeader: HomepageHeaderEntities[];
}) {
  const [index, setIndex] = useState(0);
  const t = useTranslations('MainHeader');

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end about-header home-header">
        <div className="container">
          {/* <img src="img/background_homepage_header_1.png" alt="Gyloop Logo" style={{
        height: "444px!important",
        textAlign: "center"
      }} /> */}
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
          {dataHomepageHeader.map((data) => {
            return (
              <>
                <div key={data.id}>
                  <Carousel
                    controls={false}
                    indicators={false}
                    activeIndex={index}
                    onSelect={handleSelect}
                  >
                    <Carousel.Item>
                      <h1 className="title">{data.head_text}</h1>
                      <p className="subtitle">{data.shrt_desc}</p>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="title">{data.head_text002}</h1>
                      <p className="subtitle">{data.shrt_desc002}</p>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className="title">{data.head_text003}</h1>
                      <p className="subtitle">{data.shrt_desc003}</p>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </>
            );
          })}

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
