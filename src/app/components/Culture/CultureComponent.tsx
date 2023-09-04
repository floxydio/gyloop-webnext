import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function CultureComponent() {
  const t = useTranslations('AboutUsCultureHeader');

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end culture-header">
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

      <

      <div className="about">
        <div className="container">
          <div className="card border-0 rounded-0 bg-transparent">
            <div className="card-body">
              <h3 className="card-title about-card-title">BONA FIDE</h3>

              <div className="card-text about-card-text mb-3 mb-md-4">
                <p>
                  Gyloop provide Networks Apps to allow you extend your business
                  connection, cause we understand that business are better built
                  by strong relationships. Business entities are now easy to
                  connect to the unlimited networks across industry and
                  locations.
                </p>
                <p>
                  Gyloop provide Networks Apps to allow you extend your business
                  connection, cause we understand that business are better built
                  by strong relationships. Business entities are now easy to
                  connect to the unlimited networks across industry and
                  locations.
                </p>
                <p>
                  Gyloop provide Networks Apps to allow you extend your business
                  connection, cause we understand that business are better built
                  by strong relationships. Business entities are now easy to
                  connect to the unlimited networks across industry and
                  locations.
                </p>
              </div>

              <Image
                src="/img/background_culture_profile_website.png"
                className="bonafide-image img-fluid d-block mx-auto"
                alt="gyloop-background-culture-profile-website"
                width={0}
                height={0}
                sizes="100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="subheader-bg-cover billing-automation-subheader culture-subheader">
        <div className="container">
          <div className="content culture-content">
            <p className="title">
              Your networks is your assets <br />
              These assets will help you perform
            </p>
            <p className="subtitle">Qualified Business Partners</p>

            <hr className="hr-small" />

            <p className="title-small">Business has been changed</p>
            <p className="subtitle-small">
              You, Customer, and Supplier are working together
            </p>
          </div>
        </div>
      </div>

      <div className="about-cards">
        <div className="container">
          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <Image
                  src="/img/illustrative_culture_1.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-culture-1"
                  width={0}
                  height={0}
                  sizes="100"
                />
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <div className="card-body">
                  <p className="card-title features-title">INTEGRITY</p>

                  <div className="card-text features-text">
                    <div className="d-md-none">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                    <div className="d-none d-md-block">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <div className="card-body">
                  <p className="card-title features-title">CUSTOMER FOCUS</p>

                  <div className="card-text features-text">
                    <div className="d-md-none">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                    <div className="d-none d-md-block">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <Image
                  src="/img/illustrative_culture_2.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-culture-2"
                  width={0}
                  height={0}
                  sizes="100"
                />
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <Image
                  src="/img/illustrative_culture_3.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-culture-3"
                  width={0}
                  height={0}
                  sizes="100"
                />
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <div className="card-body">
                  <p className="card-title features-title">TEAMWORK</p>

                  <div className="card-text features-text">
                    <div className="d-md-none">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                    <div className="d-none d-md-block">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer culture-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Interest to join with Us?</h3>
            <p className="subtitle">
              Ask more about people, culture, or development program
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="leadership.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Career
              </a>
              <Link href="/ContactUs" className="btn btn-primary gyloop-btn ">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
