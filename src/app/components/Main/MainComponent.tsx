'use client'
import '@/style/icon.css';
import '@/style/style.min.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import 'popper.js';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface HomepageFeatureEntities {
  id: number;
  item_place: number;
  lang_code: string;
  ttle_text: string;
  ttle_clor: string;
  shrt_desc: string;
  shrt_clor: string;
  ax_link: string;
  ax_capt: string;
  ax_type: string;
  img_ft: string;
  is_publ: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface HomepageContent {
  id: number;
  lang_code: string;
  title_text: string;
  title_color: string;
  second_title_text: string | null;
  second_title_color: string | null;
  subtitle_text: string;
  subtitle_color: string;
  image_background: string;
  btn_link: string;
  btn_caption: string;
  btn_color: string;
  btn_type: string;
  layout_type: number;
  createdAt: Date;
  updatedAt: Date | null;
}

export default function MainComponent({
  feature,
  content,
}: {
  feature: HomepageFeatureEntities[];
  content: HomepageContent[];
}) {
  const [index, setIndex] = useState(0);
  const t = useTranslations('MainComponent');

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
          <Link
            href="/Product"
            aria-label="Product Overview"
            className="gyloop-link"
          >
            {t('button')} <i className="fas fa-angle-right"></i>
          </Link>
          <div className="row position-relative">
            <div className="col-8 offset-2 d-none d-md-block position-absolute hr-bc-container">
              <hr />
            </div>
            {feature.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="col-12 col-md-4 d-flex align-items-center"
                  >
                    <div className="card bg-transparent rounded-0 border-0">
                      <div className="card-body">
                        <Image
                          src={`${process.env.IMAGE_HOME}${item.img_ft}`}
                          className="features-image"
                          alt="gyloop-icon-home-customer-relationship"
                          width={0}
                          height={0}
                          sizes="100"
                        />
                        <div className="card-title">{item.ttle_text}</div>
                        <div className="card-text">{item.shrt_desc}</div>
                        <Link
                          aria-label="Go To Product Business CRM"
                          href={item.ax_link}
                          className="gyloop-link"
                        >
                          {item.ax_capt} <i className="fas fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-md-none">
                    <hr className="hr-small bg-blue" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      {content.map((item, index) => {
        return (
          <>
            {item.layout_type === 1 ? (
              <>
                <div
                  className={`business-feature home-feature-${index + 1}`}
                  style={{
                    position: 'relative',
                    height: '500px',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${process.env.IMAGE_HOME + item.image_background
                      })`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="container">
                    <div className="content">
                      <h5 className="title">{item.title_text}</h5>

                      <p className="text">{item.subtitle_text}</p>
                      <Link
                        href="/Solutions"
                        aria-label="Solutions Overview"
                        className="gyloop-link d-block"
                        style={{
                          position: 'absolute',
                          fontSize: '18px',
                          lineHeight: '15px',
                          bottom: '48px',
                          color:
                            item.btn_type === 'transparent'
                              ? 'white'
                              : item.btn_color,
                        }}
                      >
                        {item.btn_caption}
                        <i
                          className="fas fa-angle-right"
                          style={{
                            marginLeft: 10,
                          }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`business-feature home-feature-${index + 1}`}
                  style={{
                    position: 'relative',
                    height: '500px',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${process.env.IMAGE_HOME + item.image_background
                      })`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="container d-flex justify-content-md-end">
                    <div className="content">
                      <h5 className="title">{item.title_text}</h5>

                      <p className="text">{item.subtitle_text}</p>
                      <Link
                        href="/Solutions"
                        aria-label="Solutions Overview"
                        className="gyloop-link d-block"
                        style={{
                          position: 'absolute',
                          fontSize: '18px',
                          lineHeight: '15px',
                          bottom: '48px',
                          color:
                            item.btn_type === 'transparent'
                              ? 'white'
                              : item.btn_color,
                        }}
                      >
                        {item.btn_caption}
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}

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
          <Link
            href="/Product"
            aria-label="Product Overview"
            className="gyloop-link"
          >
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

          <Link
            href="/Product"
            aria-label="Product Overview"
            className="gyloop-link d-block"
          >
            {t('button')}
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
