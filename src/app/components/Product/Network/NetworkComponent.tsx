import Image from 'next/image';
import BusinessFooter from '../Business/BusinessFooter';
import BusinessTab from '../Business/BusinessTab';
import BusinessTabTwo from '../Business/BusinessTabTwo';
import ProductManagement from '../Business/ProductManagement';
import Link from 'next/link';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import NetworkPricingComponent from './NetworkPricingComponent';

interface SolutionFunctionEntities {
  id: number;
  lang_code: string;
  page_code: string;
  func_name: string;
  func_tagx: string;
  desc_lin1: string;
  desc_lin2: string;
  link_list: string;
  imge_func: string;
  submit_type: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFaqHeader {
  id?: number;
  lang_code: string;
  page_code: string;
  head_text: string;
  head_textclr: string;
  shrt_desc: string;
  shrt_clor: string;
  bg_clor: string;
  submit_type: number;
  createdAt: Date;
  updatedAt?: Date;
}
export interface ProductFaqItem {
  id?: number;
  lang_code: string;
  page_code: string;
  ques_text: string;
  answ_text: string;
  link_list: string;
  submit_type: number;
  createdAt: Date;
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

export interface ProductFunctionality {
  id?: number;
  lang_code: String;
  page_code: String;
  prod_code: String;
  func_name: String;
  long_desc: String;
  bnft_list: String;
  link_list: String;
  is_publ: boolean;
  submit_type: number;
  createdAt: Date;
  updatedAt?: Date;
}

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

export interface ProductFeature {
  id?: number;
  lang_code: string;
  page_code: string;
  txt_title: string;
  txt_clor: string;
  txt_subtitle: string;
  txt_subClor: string;
  txt_btnLink: string;
  txt_btnCapt: string;
  txt_btnIcon: string;
  txt_btnClor: string;
  is_active: boolean;
  submit_type: number;
  createdAt: Date;
  updatedAt?: Date | undefined;
}

export default function NetworkComponent({
  dataFaqItem,
  dataProductFunction,
  dataFaqHeader,
  dataPricingItem,
  dataProductDetail,
  dataProductFeature,
  dataSolutionFunction,
}: {
  dataFaqItem: ProductFaqItem[];
  dataProductFunction: ProductFunctionality[];
  dataFaqHeader: ProductFaqHeader[];
  dataPricingItem: PricingModel[];
  dataProductDetail: ProductDetail[];
  dataProductFeature: ProductFeature[];
  dataSolutionFunction: SolutionFunctionEntities[];
}) {
  const [index, setIndex] = useState(0);
  const [indexTab, setIndexTab] = useState('');
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="billing-automation-swiper business">
        <div className="container">
          <h2 className="title mb-0">How Gyloop Works</h2>

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

      {dataSolutionFunction.map((data) => {
        return (
          <div key={data.id}>
            {data.submit_type === 1 ? (
              <div className="subheader-bg-cover billing-automation-subheader networks-subheader">
                <div className="container justify-content-md-start">
                  <div className="content">
                    <h2 className="title">{data.func_name}</h2>
                    <p className="subtitle">{data.func_tagx}</p>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.link_list}</h5>
                    <p className="subtitle-small">{data.imge_func}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="subheader-bg-cover billing-automation-subheader networks-subheader">
                <div className="container justify-content-md-start">
                  <div className="content">
                    <h2 className="title">{data.func_name}</h2>
                    <p className="subtitle">{data.func_tagx}</p>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.link_list}</h5>
                    <p className="subtitle-small">{data.imge_func}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="business-tabs-control d-none d-xl-block">
        <div className="container">
          <ul className="nav nav-tabs">
            {dataProductDetail.map((data, i) => {
              return (
                <li
                  className="nav-item"
                  onClick={() => setIndexTab(data.prod_code as string)}
                  key={i}
                >
                  <a
                    className="nav-link"
                    href={`#${data.prod_code}`}
                    data-toggle="collapse"
                    aria-expanded={indexTab === data.prod_code ? true : false}
                    key={i}
                  >
                    <i className={`${data.tabx_icon} mr-2`}></i>
                    {data.tabx_text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {dataProductDetail.map((data) => {
        return (
          <div key={data.id}>
            {indexTab === data.prod_code ? (
              <div >
                <div
                  className="business-tabs"
                  id={`business-accordion-${data.id}`}
                >
                  <div className="container">
                    <div>
                      <h4
                        className="footer-links-toggle d-flex align-items-center d-xl-none"
                        data-toggle="collapse"
                        data-target={`#${data.prod_code}`}
                        aria-expanded="true"
                      >
                        <i className="fas fa-users"></i>
                        <span className="ml-2 mr-auto">{data.tabx_text}</span>

                        <i className="fas fa-angle-down icon-rotates"></i>
                      </h4>
                      <div
                        id={`${data.prod_code}`}
                        className="collapse show"
                        data-parent="#business-accordion"
                      >
                        <div className="tab">
                          <h5 className="link-title">BUSINESS</h5>

                          <h3 className="title">{data.prod_name}</h3>

                          <p>{data.head_text}</p>
                          <p>{data.shr1_desc}</p>

                          <div className="value-box">
                            <h4 className="title d-flex align-items-center">
                              <Image
                                src="/img/icon_idea.png"
                                alt="gyloop-icon-idea"
                                width={0}
                                height={0}
                                sizes="100"
                              />
                              <span>Value Proposition</span>
                            </h4>

                            <p>{data.vpro_desc}</p>
                          </div>

                          <p>{data.shr1_desc}</p>

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
                              <p className="text-warning ml-n2">
                                Business Benefits
                              </p>
                            </div>
                          </div>
                          {dataProductFunction.map((data) => {
                            return (
                              <div key={data.id}>
                                {data.submit_type === 1 ? (
                                  <div className="product-management">
                                    <div className="row">
                                      <div className="col-12 col-xl-8">
                                        <h4 className="title">
                                          {data.func_name}
                                        </h4>

                                        <p>{data.long_desc}</p>

                                        <a
                                          href="live-demo.html"
                                          className="gyloop-link d-block"
                                        >
                                          Watch Video
                                          <i className="fas fa-angle-right"></i>
                                        </a>
                                        <a
                                          href="library.html"
                                          className="gyloop-link d-block"
                                        >
                                          Find Documentation
                                          <i className="fas fa-angle-right"></i>
                                        </a>
                                      </div>

                                      <div className="col-12 d-xl-none">
                                        <hr className="hr-small bg-blue" />
                                      </div>

                                      <div className="col-12 col-xl-4 col-lists">
                                        <ul className="list-unstyled">
                                          <li>
                                            <i className="list-icon fas fa-check-circle text-blue"></i>
                                            {data.bnft_list}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="product-management">
                                    <div className="row">
                                      <div className="col-12 col-xl-8">
                                        <h4 className="title">
                                          {data.func_name}
                                        </h4>

                                        <p>{data.long_desc}</p>

                                        <a
                                          href="live-demo.html"
                                          className="gyloop-link d-block"
                                        >
                                          Watch Video
                                          <i className="fas fa-angle-right"></i>
                                        </a>
                                        <a
                                          href="library.html"
                                          className="gyloop-link d-block"
                                        >
                                          Find Documentation
                                          <i className="fas fa-angle-right"></i>
                                        </a>
                                      </div>

                                      <div className="col-12 d-xl-none">
                                        <hr className="hr-small bg-blue" />
                                      </div>

                                      <div className="col-12 col-xl-4 col-lists">
                                        <ul className="list-unstyled">
                                          <li>
                                            <i className="list-icon fas fa-check-circle text-blue"></i>
                                            {data.bnft_list}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          <BusinessFooter />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}

        {dataProductFeature.map((data, i) => {
          return (
            <div key={i}>
              {data.submit_type === 1 ? (
                <div className="business-feature networks-feature">
                  <div className="container">
                    <div className="content">
                      <h5 className="title">{data.txt_title}</h5>

                      <p className="text">{data.txt_subtitle}</p>

                      <Link
                        href="/Solutions"
                        aria-label="Solutions Overview"
                        className="gyloop-link d-block"
                      >
                        {data.txt_btnCapt}
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="business-feature networks-feature">
                  <div className="container">
                    <div className="content">
                      <h5 className="title">{data.txt_title}</h5>

                      <p className="text">{data.txt_subtitle}</p>

                      <Link
                        href="/Solutions"
                        aria-label="Solutions Overview"
                        className="gyloop-link d-block"
                      >
                        {data.txt_btnCapt}
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      <NetworkPricingComponent dataPricingModel={dataPricingItem} />

      <div className="business-pricing business-faq" id="faq-accordion">
        <div className="container">
          <h3 className="title">Frequently Asked Question</h3>
          <p className="subtitle">
            Get answers to the most-asked questions about Gyloop Networks.
          </p>
          {dataFaqItem.map((item, index) => (
            <div className="card rounded-0" key={index}>
              <div className="card-header">
                <h4
                  className="card-title d-flex align-items-start mb-0"
                  data-toggle="collapse"
                  data-target="#faq-1"
                  aria-expanded="true"
                >
                  <i className="far fa-plus-circle"></i>
                  <i className="far fa-minus-circle"></i>
                  <span>{item.ques_text}</span>
                </h4>
              </div>

              <div
                className="collapse show"
                id="faq-1"
                data-parent="#faq-accordion"
              >
                <div className="card-body">
                  <div className="card-text">
                    <p>{item.answ_text}</p>
                  </div>

                  <a
                    href="business.html?s=business-pricing"
                    className="gyloop-link d-block"
                  >
                    Learn More User Comparison
                    <i className="fas fa-angle-right"></i>
                  </a>
                  <Link
                    href="/SubscribeProfessional"
                    className="gyloop-link d-block"
                  >
                    Upgrade User
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="business-cta">
        <div className="container">
          <h3 className="title">Start your planning, and feel the change</h3>
          <a href="product.html" className="gyloop-link">
            <i className="far fa-chevron-circle-right"></i>
            Get Started
          </a>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer business-footer networks-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Let’s Build Networks</h3>
            <p className="subtitle">
              Ask more about people, culture, or development program
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="live-demo.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                System Demo
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
