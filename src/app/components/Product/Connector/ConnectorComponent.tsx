import BusinessFooter from '../Business/BusinessFooter';
import BusinessTab from '../Business/BusinessTab';
import BusinessTabTwo from '../Business/BusinessTabTwo';
import ProductManagement from '../Business/ProductManagement';
import '@/style/style.min.css';
import '@/style/icon.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';
import ConnectorPricingComponent from './ConnectorPricingComponent';

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

export default function ConnectorComponent({
  dataPriceItem,
  dataProductDetail,
  dataFaqHeader,
  dataFaqItem,
  dataProductFunction,
}: {
  dataPriceItem: PricingModel[];
  dataProductDetail: ProductDetail[];
  dataFaqHeader: ProductFaqHeader[];
  dataFaqItem: ProductFaqItem[];
  dataProductFunction: ProductFunctionality[];
}) {
  const [index, setIndex] = useState(0);
  const [indexTab, setIndexTab] = useState("")

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

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

      <div className="subheader-bg-cover billing-automation-subheader connector-subheader">
        <div className="container justify-content-md-start">
          <div className="content">
            <h2 className="title">
              Your networks is your assets <br />
              These assets will help you perform better
            </h2>
            <p className="subtitle">Qualified Business Partners</p>

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
              <li className="nav-item" onClick={() => setIndexTab(e.prod_code as string)}>
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
              <div className="container">
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


      <BusinessFooter />

      <div className="business-feature connector-feature">
        <div className="container">
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

            <a href="solution.html" className="gyloop-link d-block">
              Learn More
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <ConnectorPricingComponent data={dataPriceItem} />

      <div className="business-pricing business-faq" id="faq-accordion">
        <div className="container">
          {dataFaqHeader.map((data) => {
            return (
              <div key={data.id}>
                {data.submit_type === 1 ? (
                  <>
                    <h3 className="title">{data.head_text}</h3>
                    <p className="subtitle">{data.shrt_desc}</p>
                  </>
                ) : (
                  <>
                    <h3 className="title">{data.head_text}</h3>
                    <p className="subtitle">{data.shrt_desc}</p>
                  </>
                )}
              </div>
            );
          })}

          <div className="card rounded-0">
            {dataFaqItem.map((data) => {
              return (
                <div key={data.id}>
                  {data.submit_type === 1 ? (
                    <div key={data.id}>
                      <div className="card-header">
                        <h4
                          className="card-title d-flex align-items-start mb-0"
                          data-toggle="collapse"
                          data-target="#faq-2"
                          aria-expanded="false"
                        >
                          <i className="far fa-plus-circle"></i>
                          <i className="far fa-minus-circle"></i>
                          <span>{data.ques_text}</span>
                        </h4>
                      </div>

                      <div
                        className="collapse"
                        id="faq-2"
                        data-parent="#faq-accordion"
                      >
                        <div className="card-body">
                          <div className="card-text">
                            <p>{data.ques_text}</p>
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
                  ) : (
                    <div key={data.id}>
                      <div className="card-header">
                        <h4
                          className="card-title d-flex align-items-start mb-0"
                          data-toggle="collapse"
                          data-target="#faq-2"
                          aria-expanded="false"
                        >
                          <i className="far fa-plus-circle"></i>
                          <i className="far fa-minus-circle"></i>
                          <span>{data.ques_text}</span>
                        </h4>
                      </div>

                      <div
                        className="collapse"
                        id="faq-2"
                        data-parent="#faq-accordion"
                      >
                        <div className="card-body">
                          <div className="card-text">
                            <p>{data.ques_text}</p>
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
                  )}
                </div>
              );
            })}
          </div>
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

      <div className="footer-bg-cover billing-automation-footer business-footer connector-footer">
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
