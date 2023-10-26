import 'bootstrap/dist/css/bootstrap.min.css';
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ProductHeader } from '@/models/product_header';

export default function ProductSlider({
  dataHeader,
}: {
  dataHeader: ProductHeader;
}) {
  return (
    <>
      {dataHeader === null || dataHeader === undefined ? (
        <p style={{ textAlign: 'center' }}>Data Kosong</p>
      ) : (
        <>
          {dataHeader.type_header === 1 ? (
            <header
              className="header-bg-cover billing-automation-header d-flex align-items-end about-header product-header"
              style={{
                backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-4 d-none d-md-block">
                    <div className="solution-header-text">
                      <p className="text-blue">FEEL BETTER</p>
                      <p>MAKE</p>
                      <p>BUSINESS</p>
                      <p>CONNECTED</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <h1 className="title">{dataHeader.head_text}</h1>
                    <p className="subtitle">{dataHeader.shrt_desc}</p>

                    <div className="solution-header-text d-md-none">
                      <h5 className="text-blue">FEEL BETTER</h5>
                      <h5>MAKE</h5>
                      <h5>BUSINESS</h5>
                      <h5>CONNECTED</h5>
                    </div>

                    <div className="solution-header-button d-flex justify-content-center justify-content-md-start">
                      <Link
                        href="/SubscribeProfessional"
                        className="btn gyloop-btn btn-warning"
                      >
                        Get Start for Free
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          ) : (
            <header
              className="header-bg-cover billing-automation-header d-flex align-items-end about-header product-header"
              style={{
                backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-4 d-none d-md-block">
                    <div className="solution-header-text">
                      <p className="text-blue">FEEL BETTER</p>
                      <p>MAKE</p>
                      <p>BUSINESS</p>
                      <p>CONNECTED</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <h1 className="title">{dataHeader.head_text}</h1>
                    <p className="subtitle">{dataHeader.shrt_desc}</p>

                    <div className="solution-header-text d-md-none">
                      <h5 className="text-blue">FEEL BETTER</h5>
                      <h5>MAKE</h5>
                      <h5>BUSINESS</h5>
                      <h5>CONNECTED</h5>
                    </div>

                    <div className="solution-header-button d-flex justify-content-center justify-content-md-start">
                      <Link
                        href="/SubscribeProfessional"
                        className="btn gyloop-btn btn-warning"
                      >
                        Get Start for Free
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          )}
        </>
      )}
    </>
  );
}
