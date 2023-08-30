import { useEffect } from "react";
import '@/style/style.min.css';
import '@/style/icon.css';

export default function MainHeader() {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);



  return (
    <>
    
    
    <header className="header-bg-cover billing-automation-header d-flex align-items-end about-header home-header">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
              <div className="carousel-item">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
              <div className="carousel-item">
                <h1 className="title">A New Era of Business Apps</h1>
                <p className="subtitle">
                  With Gyloop business platform, you will find the best way how
                  to connect your main business yo the wide range business
                  networks, automate your sales and procurement transaction,
                  easier to monitor your supply chain, and improve new business
                  opportunity.
                </p>
              </div>
            </div>
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
          </div>

          <div className="solution-header-button d-flex justify-content-center">
            <a
              href="subscribe-professional.html?trial=1"
              className="btn gyloop-btn btn-warning text-white"
            >
              Get Start for Free
            </a>
          </div>
        </div>
      </header>
    
    </>
  )
}
