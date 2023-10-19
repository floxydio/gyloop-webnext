import Image from 'next/image';
import BillingAutomationContent from '../SalesAutomation/BillingAutomationContent';
import Link from 'next/link';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

export default function CustomerPortalComponent() {
  const [index, setIndex] = useState(0);

  const t = useTranslations('SolutionsCustomerPortalHeader');

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
     


      <div className="billing-automation-swiper">
        <div className="container">
          <h2 className="title">Automate your sales processing</h2>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
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
                  alt="Video Placeholder"
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
                  alt="Video Placeholder"
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
                  alt="Video Placeholder"
                  width={0}
                  height={0}
                  sizes="100"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="subheader-bg-cover billing-automation-subheader customer-portal-subheader">
        <div className="container">
          <div className="content">
            <div className="d-md-none">
              <h2 className="title">
                Your networks is your assets <br />
                These assets will help you perform better
              </h2>
              <p className="subtitle">Qualified Business Partners</p>
            </div>

            <div className="d-none d-md-block">
              <h2 className="title">
                Your sales is your customer purchase <br />
                Your purchase is your supplier sales
              </h2>
              <p className="subtitle">Automated and real time</p>
            </div>

            <hr className="hr-small" />

            <h5 className="title-small">Business has been changed</h5>
            <p className="subtitle-small">
              You, Customer, and Supplier are working together now
            </p>
          </div>
        </div>
      </div>

      <BillingAutomationContent />

      <div className="footer-bg-cover billing-automation-footer">
        <div className="container">
          <div className="content">
            <h3 className="title">Do you have a question?</h3>
            <p className="subtitle">
              Ask more about people, culture, or development program
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="libr/ary.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Documentation
              </a>
              <Link href="/ContactUs" className="btn btn-primary gyloop-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
