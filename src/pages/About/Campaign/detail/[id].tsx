import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle';
import Image from 'next/image';

export default function CampaignDetail() {
  return (
    <>
      <HeaderNoMenu />
      <LeadershipTitle title="Campaign Program" />
      <div className="leadership-detail campaign-detail">
        <div className="container">
          <div className="card rounded-0">
            <Image
              src="/img/illustrative_campaign_1.png"
              className="card-img-top rounded-0 d-md-none mb-0"
              alt="gyloop-illustrative-campaign"
              width={0}
              height={0}
              sizes="100"
            />

            <div className="card-body">
              <div className="d-flex align-items-start">
                <Image
                  src="/img/illustrative_campaign_1.png"
                  className="img-big d-none d-xl-block"
                  alt="gyloop-illustrative-campaign"
                  width={0}
                  height={0}
                  sizes="100"
                />
                <div className="content flex-grow-1">
                  <div className="row align-items-end">
                    <div className="col-12 col-md-6 d-none d-md-block d-xl-none">
                      <Image
                        src="/img/illustrative_campaign_1.png"
                        className="img-fluid"
                        alt="gyloop-illustrative-campaign"
                        width={0}
                        height={0}
                        sizes="100"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <h3 className="card-title">The Giant campaign program</h3>
                    </div>
                  </div>

                  <div className="campaign-detail-content leadership-detail-content">
                    <p>
                      The Gyloop CRM provides an unique platform to organize all
                      business interaction to your customer with very closer
                      relationship. This platform allow you to manage your
                      business transaction and invite your customer to track and
                      monitor the latest update status of their order or
                      deliveries. They can also subscribe your product catalog
                      for elaborate their sourcing or self-service procurement.
                      These platform bring better business integration and
                      simplicity between you and your customers regardless of
                      whatever backend system behind.
                    </p>
                    <p>
                      The Gyloop CRM provides an unique platform to organize all
                      business interaction to your customer with very closer
                      relationship. This platform allow you to manage your
                      business transaction and invite your customer to track and
                      monitor the latest update status of their order or
                      deliveries. They can also subscribe your product catalog
                      for elaborate their sourcing or self-service procurement.
                      These platform bring better business integration and
                      simplicity between you and your customers regardless of
                      whatever backend system behind.
                    </p>
                    <p>
                      The Gyloop CRM provides an unique platform to organize all
                      business interaction to your customer with very closer
                      relationship. This platform allow you to manage your
                      business transaction and invite your customer to track and
                      monitor the latest update status of their order or
                      deliveries. They can also subscribe your product catalog
                      for elaborate their sourcing or self-service procurement.
                      These platform bring better business integration and
                      simplicity between you and your customers regardless of
                      whatever backend system behind.
                    </p>
                    <p>
                      The Gyloop CRM provides an unique platform to organize all
                      business interaction to your customer with very closer
                      relationship. This platform allow you to manage your
                      business transaction and invite your customer to track and
                      monitor the latest update status of their order or
                      deliveries. They can also subscribe your product catalog
                      for elaborate their sourcing or self-service procurement.
                      These platform bring better business integration and
                      simplicity between you and your customers regardless of
                      whatever backend system behind.
                    </p>
                    <p>
                      The Gyloop CRM provides an unique platform to organize all
                      business interaction to your customer with very closer
                      relationship. This platform allow you to manage your
                      business transaction and invite your customer to track and
                      monitor the latest update status of their order or
                      deliveries. They can also subscribe your product catalog
                      for elaborate their sourcing or self-service procurement.
                      These platform bring better business integration and
                      simplicity between you and your customers regardless of
                      whatever backend system behind.
                    </p>
                  </div>

                  <div className="campaign-detail-button text-center d-flex justify-content-center justify-content-md-start py-5 pt-md-4 pb-md-3 pt-xl-5 pb-xl-5 mt-xl-5">
                    <a
                      href="subscribe-volunteer.html"
                      className="btn btn-primary"
                    >
                      Join Campaign
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
