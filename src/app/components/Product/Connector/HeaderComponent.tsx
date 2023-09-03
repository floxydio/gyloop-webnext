import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeaderConnector() {
  const t = useTranslations('ProductConnectorHeader');

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header connector-header">
        <div className="container d-flex justify-content-md-end">
          <div className="content px-md-0">
            <Image
              className="logo"
              src="/img/logo-connector-transparent.png"
              alt="Logo Gyloop Connector"
              width={0}
              height={0}
              sizes="100"
            />
            <h1 className="title">{t('title')}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">{t('subtitle')}</span>
              <span className="d-none d-md-inline d-xl-none">
                Bring the power of business integration to your business
                community
              </span>
            </p>
            <h5 className="info">{t('secondSubtitle')}</h5>
          </div>
        </div>
      </header>
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
