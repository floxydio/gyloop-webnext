import '@/style/style.min.css';
import '@/style/icon.css';
import { useEffect, useState } from 'react';
import BusinessTab from './BusinessTab';
import BusinessFooter from './BusinessFooter';
import ProductManagement from './ProductManagement';
import BusinessTabTwo from './BusinessTabTwo';
import BusinessTabThree from './BusinessTabThree';
import BusinessPricingComponent from './BusinessPricingComponent';
import 'popper.js';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function BusinessComponent() {
  const [index, setIndex] = useState(0);
  const t = useTranslations('ProductBusinessHeader');

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="business-subheader-list">
        <div className="container">
          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('firstTitleFeature')}</div>

              <div className="card-subtitle">{t('firstSubtitleFeature')}</div>

              <i className="fas fa-heart text-white mr-1"></i>
              <a href="javascript:void()" className="gyloop-link">
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">
                {t('secondTitleFeature')}
              </div>

              <div className="card-subtitle">
                {t('secondSubtitleFeature')}
              </div>

              <i className="fas fa-shopping-cart text-white mr-1"></i>
              <a href="javascript:void()" className="gyloop-link">
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">
                {t('thirdTitleFeature')}
              </div>

              <div className="card-subtitle">
                {t('thirdSubtitleFeature')}
              </div>

              <i className="fas fa-warehouse text-white mr-1"></i>
              <a href="javascript:void()" className="gyloop-link">
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="billing-automation-swiper business">
        <div className="container">
          <h2 className="title">How Gyloop Works</h2>

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

      <div className="subheader-bg-cover billing-automation-subheader business-subheader">
        <div className="container justify-content-md-start">
          <div className="content">
            <h2 className="title">
              Your sales is your customer purchase <br />
              Your purchase is your supplier sales
            </h2>
            <p className="subtitle">Automated and real time</p>

            <hr className="hr-small" />

            <h5 className="title-small">Business has been changed</h5>
            <p className="subtitle-small">
              You, Customer, and Supplier are working together now
            </p>
          </div>
        </div>
      </div>
      <div className="business-tabs-control d-none d-xl-block">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#crm"
                data-toggle="collapse"
                aria-expanded="true"
              >
                <i className="fas fa-heart mr-2"></i>
                CRM Module
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#srm" data-toggle="collapse">
                <i className="fas fa-shopping-cart mr-2"></i>
                SRM Module
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#iwm" data-toggle="collapse">
                <i className="fas fa-warehouse mr-2"></i>
                IWM Module
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* TAB HERE */}
      <div className="business-tabs" id="business-accordion">
        <div className="container">
          <div>
            <h4
              className="footer-links-toggle d-flex align-items-center d-xl-none"
              data-toggle="collapse"
              data-target="#crm"
              aria-expanded="true"
            >
              <i className="fas fa-heart"></i>
              <span className="ml-2 mr-auto">CRM Module</span>

              <i className="fas fa-angle-down icon-rotates"></i>
            </h4>
            <div
              id="crm"
              className="collapse show"
              data-parent="#business-accordion"
            >
              <div className="tab">
                <BusinessTab />

                <div className="billing-automation-swiper">
                  <div className="container">
                    <h2 className="title">Highlight Menu</h2>

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

                <div className="row d-none d-xl-flex product-management-title">
                  <div className="col-8">
                    <p className="text-warning">Key Features</p>
                  </div>
                  <div className="col-4 pl-0">
                    <p className="text-warning ml-n2">Business Benefits</p>
                  </div>
                </div>

                {[...Array(6)].map((x, i) => {
                  return <ProductManagement key={x} />;
                })}

                <BusinessFooter />
              </div>
            </div>
          </div>

          <div>
            <h4
              className="footer-links-toggle d-flex align-items-center d-xl-none"
              data-toggle="collapse"
              data-target="#srm"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="ml-2 mr-auto">SRM Module</span>

              <i className="fas fa-angle-down icon-rotates"></i>
            </h4>
            <div
              id="srm"
              className="collapse"
              data-parent="#business-accordion"
            >
              <div className="tab">
                <BusinessTabTwo />

                <div className="billing-automation-swiper">
                  <div className="container">
                    <h2 className="title">Highlight Menu</h2>

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

                <div className="row d-none d-xl-flex product-management-title">
                  <div className="col-8">
                    <p className="text-warning">Key Features</p>
                  </div>
                  <div className="col-4 pl-0">
                    <p className="text-warning">Business Benefits</p>
                  </div>
                </div>

                {[...Array(6)].map((x, i) => {
                  return <ProductManagement key={x} />;
                })}
                <BusinessFooter />
              </div>
            </div>
          </div>

          <div>
            <h4
              className="footer-links-toggle d-flex align-items-center d-xl-none"
              data-toggle="collapse"
              data-target="#iwm"
            >
              <i className="fas fa-warehouse"></i>
              <span className="ml-2 mr-auto">IWM Module</span>

              <i className="fas fa-angle-down icon-rotates"></i>
            </h4>
            <div
              id="iwm"
              className="collapse"
              data-parent="#business-accordion"
            >
              <div className="tab">
                <BusinessTabThree />

                <div className="billing-automation-swiper">
                  <div className="container">
                    <h2 className="title">Highlight Menu</h2>

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

                <div className="row d-none d-xl-flex product-management-title">
                  <div className="col-8">
                    <p className="text-warning">Key Features</p>
                  </div>
                  <div className="col-4 pl-0">
                    <p className="text-warning">Business Benefits</p>
                  </div>
                </div>

                {[...Array(6)].map((x, i) => {
                  return <ProductManagement key={x} />;
                })}
                <BusinessFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END */}

      <BusinessPricingComponent />
    </>
  );
}
