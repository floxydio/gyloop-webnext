import { useTranslations } from 'next-intl';
import React from 'react';

export default function ProviderHeader() {
  const t = useTranslations('ProductProviderHeader');

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header provider-header">
        <div className="container d-flex justify-content-md-end">
          <div className="content px-md-0">
            <img
              className="logo"
              src="/img/logo-provider-transparent.png"
              alt="Logo Gyloop Provider"
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

      <div className="business-subheader-list">
        <div className="container">
          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{t('firstTitleFeature')}</div>

              <div className="card-subtitle">{t('firstSubtitleFeature')}</div>

              <i className="fas fa-heart text-white mr-1"></i>
              <a href="preventDefault()" className="gyloop-link">
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
              <a href="preventDefault()" className="gyloop-link">
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
              <a href="preventDefault()" className="gyloop-link">
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
