import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CampaignComponent() {
  const t = useTranslations('AboutUsCampaignHeader');
  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end campaign-header">
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

    

      <div className="about">
        <div className="container">
          <div className="card border-0 rounded-0 bg-transparent">
            <div className="card-body">
              <h3 className="card-title about-card-title">Campaign Program</h3>

              <div className="card-text about-card-text">
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
            </div>
          </div>

          <div className="card border-0 rounded-0 bg-transparent">
            <div className="card-body">
              <h3 className="card-title about-card-title">Program Volunteer</h3>

              <div className="card-text about-card-text">
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
            </div>
          </div>

          <div className="card border-0 rounded-0 bg-transparent">
            <div className="card-body">
              <h3 className="card-title about-card-title">Program Benefit</h3>

              <div className="card-text about-card-text">
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
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer about-subheader campaign-subheader">
        <div className="container justify-content-md-start">
          <div className="content text-white">
            <h3 className="title">COLLABORATION</h3>
            <p className="subtitle">
              <strong>Start together, achieve together</strong>
            </p>

            <p className="solution-subheader-text">
              make you and your partners have the same understanding, make you
              have more business opportunities
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                href="/SubscribeProfessional?trial=1"
                className="btn btn-warning gyloop-btn text-white"
              >
                Get Start for Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cards">
        <div className="container">
          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <Image
                  src="/img/illustrative_campaign_1.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-campaign-1"
                  width={0}
                  height={0}
                  sizes="100"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <div className="card-body">
                  <p className="card-title features-title">
                    The Giant Campaign Program
                  </p>

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

                  <Link href="/About/Campaign/detail/1" className="gyloop-link">
                    Learn More<i className="fas fa-angle-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <div className="card-body">
                  <p className="card-title features-title">
                    The Rookie Campaign for Fast
                  </p>

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

                  <Link href="/About/Campaign/detail/1" className="gyloop-link">
                    Learn More<i className="fas fa-angle-right ml-2"></i>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <Image
                  src="/img/illustrative_campaign_2.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-campaign-2"
                  width={0}
                  height={0}
                  sizes="100"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0">
            <div className="row">
              <div className="col-12 col-md-6 pr-md-0">
                <Image
                  src="/img/illustrative_campaign_3.png"
                  className="features-image img-fluid"
                  alt="gyloop-illustrative-campaign-3"
                  width={0}
                  height={0}
                  sizes="100"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="col-12 col-md-6 pl-md-0">
                <div className="card-body">
                  <p className="card-title features-title">
                    Strategic Improvement Program
                  </p>

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

                  <Link href="/About/Campaign/detail/1" className="gyloop-link">
                    Learn More<i className="fas fa-angle-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer campaign-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Do you have a question?</h3>
            <p className="subtitle">
              Ask more about our campaign, benefit, methodology, or anything
              else.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                href="/SubscribeVolunteer"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Join Campaign
              </Link>
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
