import { ProductHeader } from '@/models/product_header';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeaderConnector({ dataHeader }: { dataHeader: ProductHeader }) {
  const t = useTranslations('ProductConnectorHeader');

  return (
    <>
      {dataHeader.type_header === 1 ? <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header" style={{
        backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
      }}>
        <div className="container d-flex justify-content-md-end">
          <div className="content px-md-0">
            <Image
              className="logo"
              src="/img/logo-business-transparent.png"
              alt="Logo Gyloop Business"
              width={0}
              height={0}
              sizes="100"
            />
            <h1 className="title">{dataHeader.head_text}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">{dataHeader.shrt_desc}</span>
              <span className="d-none d-md-inline d-xl-none">
                {dataHeader.shrt_desc}
              </span>
            </p>
            <h5 className="info">{dataHeader.tagx_text}</h5>
          </div>
        </div>
      </header> : <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header" style={{
        backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
      }}>
        <div className="container">
          <div className="content px-md-0">
            <Image
              className="logo"
              src="/img/logo-business-transparent.png"
              alt="Logo Gyloop Business"
              width={0}
              height={0}
              sizes="100"
            />
            <h1 className="title">{dataHeader.head_text}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">{dataHeader.shrt_desc}</span>
              <span className="d-none d-md-inline d-xl-none">
                {dataHeader.shrt_desc}
              </span>
            </p>
            <h5 className="info">{dataHeader.tagx_text}</h5>
          </div>
        </div>
      </header>}
      <div className="business-subheader-list connector-subheader-list">
        <div className="container">
          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('firstTitleFeature')}</div>

              <div className="card-subtitle">{t('firstSubtitleFeature')}</div>

              <i className="fas fa-users text-white mr-1"></i>
              <a
                href="preventDefault()"
                className="gyloop-link"
              // onClick="show_tab('#business-collapse-1')"
              >
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('secondTitleFeature')}</div>

              <div className="card-subtitle">{t('secondSubtitleFeature')}</div>

              <i className="fas fa-id-card text-white mr-1"></i>
              <a
                href="preventDefault()"
                className="gyloop-link"
              // onClick="show_tab('#business-collapse-2')"
              >
                {t('button')}
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
