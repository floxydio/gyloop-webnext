import Footer from '../Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import 'popper.js';
import Image from 'next/image';
export default function LeadershipDetailComponent() {
  return (
    <>
      <div className="leadership-detail">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <Image
                  src="/img/placeholder-square.png"
                  className="img-big d-none d-xl-block"
                  alt="gyloop-placeholder-square"
                  width={0}
                  height={0}
                  sizes="100"
                />
                <div className="content flex-grow-1">
                  <div className="row align-items-end">
                    <div className="col-12 col-md-6 d-xl-none">
                      <Image
                        src="/img/placeholder-square.png"
                        className="img-fluid"
                        alt="gyloop-placeholder-square-1"
                        width={0}
                        height={0}
                        sizes="100"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">Chief Executive Officer</p>
                    </div>
                  </div>

                  <div className="leadership-detail-content">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
