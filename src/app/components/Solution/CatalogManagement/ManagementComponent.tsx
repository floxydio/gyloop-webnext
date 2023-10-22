import Image from 'next/image';
import BillingAutomationContent from '../SalesAutomation/SalesAutomationComponent';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import BillingCatalogManagement from './BillingCatalogManagement';

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

interface SolutionProductEntities {
  id: number;
  lang_code: string;
  head_text: string;
  head_textclr: string;
  tagx_text: string;
  tagx_clor: string;
  long_desc: string;
  long_clor: string;
  ax_link: string;
  ax_capt: string;
  ax_type: string;
  imge_feat: string;
  is_publ: boolean;
  submit_type: number;
  createdAt: Date;
  updatedAt: Date;
}

interface MediaHighlightEntities {
  id: number;
  langCode: string;
  pageCode: string;
  ttleText: string;
  mdiaType: string;
  vdeoLink: string;
  vdeoPlay: string;
  imgeLink: string;
  isPubl: boolean;
  submit_type: number;
  createdAt: Date;
  updateAt: Date;
}

export default function ManagementComponent({
  dataSolutionFunction,
  dataSolutionProduct,
  dataMediaHighlight,
}: {
  dataSolutionFunction: SolutionFunctionEntities[];
  dataSolutionProduct: SolutionProductEntities[];
  dataMediaHighlight: MediaHighlightEntities[];
}) {
  const [index, setIndex] = useState(0);

  const t = useTranslations('SolutionsCatalogManagementHeader');

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

      {dataSolutionFunction.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div
                className="subheader-bg-cover billing-automation-subheader catalog-management-subheader"
                key={data.id}
              >
                <div className="container">
                  <div className="content">
                    <div className="d-md-none">
                      <h2 className="title">{data.func_name}</h2>
                      <p className="subtitle">{data.func_tagx}</p>
                    </div>

                    <div className="d-none d-md-block">
                      <h2 className="title">{data.desc_lin1}</h2>
                      <p className="subtitle">{data.desc_lin2}</p>
                    </div>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.link_list}</h5>
                    <p className="subtitle-small">{data.imge_func}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="subheader-bg-cover billing-automation-subheader catalog-management-subheader"
                key={data.id}
              >
                <div className="container">
                  <div className="content">
                    <div className="d-md-none">
                      <h2 className="title">{data.func_name}</h2>
                      <p className="subtitle">{data.func_tagx}</p>
                    </div>

                    <div className="d-none d-md-block">
                      <h2 className="title">{data.desc_lin1}</h2>
                      <p className="subtitle">{data.desc_lin2}</p>
                    </div>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.link_list}</h5>
                    <p className="subtitle-small">{data.imge_func}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
      <BillingCatalogManagement dataSolutionProduct={dataSolutionProduct} />
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
