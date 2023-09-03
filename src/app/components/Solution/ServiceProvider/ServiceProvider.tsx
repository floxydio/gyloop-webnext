import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceProviderComponent() {
  const t = useTranslations('SolutionsServiceProviderHeader');

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end service-provider-header">
        <div className="container">
          <h1 className="title">{t('title')}</h1>
          <p className="subtitle">
            <span className="d-md-none d-xl-inline">{t('subtitle')}</span>
            <span className="d-none d-md-inline d-xl-none">
              Bring the power of business integration to your business community
            </span>
          </p>
          <h5 className="info">{t('secondSubtitle')}</h5>
        </div>
      </header>

      <Link locale="id" href="/id/Solutions/ServiceProvider">
        Switch to Indonesia
      </Link>
      <Link locale="en" href="/en/Solutions/ServiceProvider">
        Switch to English
      </Link>

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

      <div className="subheader-bg-cover billing-automation-subheader service-provider-subheader">
        <div className="container">
          <div className="content">
            <div className="d-md-none">
              <h2 className="title">
                Your networks is your assets <br />
                These assets will help you perform better
              </h2>
              <p className="subtitle">Qualified Business Partners</p>
            </div>

            <div className="d-none d-md-block">
              <h2 className="title">
                Your sales is your customer purchase <br />
                Your purchase is your supplier sales
              </h2>
              <p className="subtitle">Automated and real time</p>
            </div>

            <hr className="hr-small" />

            <h5 className="title-small">Business has been changed</h5>
            <p className="subtitle-small">
              You, Customer, and Supplier are working together now
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
