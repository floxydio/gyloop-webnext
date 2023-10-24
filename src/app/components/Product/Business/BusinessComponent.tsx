'use client';
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

export interface PricingModel {
  id?: number;
  lang_code?: string;
  page_code?: string;
  pckg_name?: string;
  pckg_desc?: string;
  defa_curc?: string;
  defa_valu?: string;
  defa_term?: number;
  altr_curc?: string;
  altr_valu?: number;
  altr_term?: string;
  pckg_icon?: string;
  bt_link?: string;
  bt_capt?: string;
  bt_type?: string;
  is_popu?: boolean;
  is_publ?: boolean;
  submit_type?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TablePlanModel {
  id?: number;
  lang_code?: string;
  title_trigger?: string;
  title_feature?: string;
  page_code?: string;
  title_tooltip?: string;
  is_showTooltip?: boolean;
  title_verified?: string;
  title_verifiedTooltip?: null;
  title_colorVerified?: string;
  title_volunteer?: string;
  title_volunteerTooltip?: null;
  title_colorVolunteer?: string;
  title_functional?: string;
  title_functionalTooltip?: null;
  title_colorFunctional?: string;
  title_professional?: string;
  title_professionalTooltip?: null;
  title_colorProfessional?: string;
  is_publ?: boolean;
  submit_type?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductDetail {
  id?: number;
  lang_code?: string;
  page_code?: string;
  prod_code?: string;
  tabx_text?: string;
  tabx_icon?: string;
  prod_name?: string;
  prod_clor?: string;
  head_text?: string;
  head_textclor?: string;
  shr1_desc?: string;
  shr1_clor?: string;
  vpro_desc?: string;
  vpro_clor?: string;
  shr2_desc?: string;
  shr2_clor?: string;
  is_publ?: boolean;
  submit_type?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default function BusinessComponent({
  dataPriceItem,
  dataTablePlan,
  dataProductDetail,
}: {
  dataPriceItem: PricingModel[];
  dataTablePlan: TablePlanModel[];
  dataProductDetail: ProductDetail[];
}) {
  const [index, setIndex] = useState(0);
  const [indexTab, setIndexTab] = useState("")
  console.log(dataProductDetail)
  const t = useTranslations('ProductBusinessHeader');
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
              <a href="#" className="gyloop-link">
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('secondTitleFeature')}</div>

              <div className="card-subtitle">{t('secondSubtitleFeature')}</div>

              <i className="fas fa-shopping-cart text-white mr-1"></i>
              <a href="javascript:void()" className="gyloop-link">
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('thirdTitleFeature')}</div>

              <div className="card-subtitle">{t('thirdSubtitleFeature')}</div>

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
          <ul className="nav">
            {dataProductDetail.map((e, i) => (
              <li className="nav-item" onClick={() => setIndexTab(e.prod_code as string)} key={i}>
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  aria-expanded={indexTab === e.prod_code ? true : false}
                >
                  <i className={`${e.tabx_icon} mr-2`}></i>
                  {e.tabx_text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {dataProductDetail.map((item, i) => {
        return (
          <>
            {indexTab === item.prod_code ? <div className="business-tabs" id={`business-accordion-${item.id}`}>
              <div className="container" key={i}>
                <div>
                  <h4
                    className="footer-links-toggle d-flex align-items-center d-xl-none"
                    data-toggle="collapse"
                    data-target={`#${item.prod_code}`}
                    aria-expanded="true"
                  >
                    <i className="fas fa-heart"></i>
                    <span className="ml-2 mr-auto">{item.tabx_text}</span>

                    <i className="fas fa-angle-down icon-rotates"></i>
                  </h4>
                  <div
                    id={`${item.prod_code}`}
                    className="collapse show"
                    data-parent={`#business-accordion`}
                  >
                    <div className="tab">
                      <BusinessTab productDetail={item} />

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
              </div>
            </div> : null}
          </>
        )
      })}

      {/* END */}

      <BusinessPricingComponent
        data={dataPriceItem}
        dataTablePlan={dataTablePlan}
      />
    </>
  );
}
