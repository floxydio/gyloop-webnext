import Image from 'next/image';
import BillingAutomationContent from '../SalesAutomation/SalesAutomationComponent';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import BusinessNetworkingContent from './BusinessNetworkingContent';
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

export default function BusinessNetworkingComponent({
  dataSolutionFunction,
  dataSolutionProduct,
  dataMediaHighlight,
}: {
  dataSolutionProduct: SolutionProductEntities[];
  dataSolutionFunction: SolutionFunctionEntities[];
  dataMediaHighlight: MediaHighlightEntities[];
}) {
  const t = useTranslations('SolutionsBusinessNetworkingHeader');
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
                  alt="Video Placeholder"
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
                  alt="Video Placeholder"
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
                  alt="Video Placeholder"
                  width={0}
                  height={0}
                  sizes="100"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {dataSolutionFunction.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div
                className="subheader-bg-cover billing-automation-subheader business-networking-subheader"
                key={data.id}
              >
                <div className="container">
                  <div className="content">
                    <div className="d-md-none">
                      <h2 className="title">{data.func_name}</h2>
                      <p className="subtitle">{data.func_tagx}</p>
                    </div>

                    <div className="d-none d-md-block">
                      <h2 className="title">
                        {data.func_name} <br />
                        {data.func_tagx}
                      </h2>
                      <p className="subtitle">{data.desc_lin1}</p>
                    </div>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.desc_lin2}</h5>
                    <p className="subtitle-small">{data.link_list}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}

      <BusinessNetworkingContent dataSolutionProduct={dataSolutionProduct} />

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
