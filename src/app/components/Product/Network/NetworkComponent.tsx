import Image from 'next/image';
import BusinessFooter from '../Business/BusinessFooter';
import BusinessTab from '../Business/BusinessTab';
import BusinessTabTwo from '../Business/BusinessTabTwo';
import ProductManagement from '../Business/ProductManagement';
import Link from 'next/link';

export default function NetworkComponent() {
  return (
    <>
      <div className="billing-automation-swiper business">
        <div className="container">
          <h2 className="title mb-0">How Gyloop Works</h2>

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
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subheader-bg-cover billing-automation-subheader networks-subheader">
        <div className="container justify-content-md-start">
          <div className="content">
            <h2 className="title">
              Your networks is your assets <br />
              These assets will help you perform better
            </h2>
            <p className="subtitle">Qualified Business Partners</p>

            <hr className="hr-small" />

            <h5 className="title-small">Business has been changed</h5>
            <p className="subtitle-small">
              You, Customer, and Supplier are working together now
            </p>
          </div>
        </div>
      </div>

      <div className="business-tabs-control d-none d-xl-block">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#business-collapse-1"
                data-toggle="collapse"
                aria-expanded="true"
              >
                <i className="fas fa-users mr-2"></i>
                Networks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#business-collapse-2"
                data-toggle="collapse"
              >
                <i className="fas fa-id-card mr-2"></i>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="business-tabs" id="business-accordion">
        <div className="container">
          <div>
            <h4
              className="footer-links-toggle d-flex align-items-center d-xl-none"
              data-toggle="collapse"
              data-target="#business-collapse-1"
              aria-expanded="true"
            >
              <i className="fas fa-users"></i>
              <span className="ml-2 mr-auto">Networks</span>

              <i className="fas fa-angle-down icon-rotates"></i>
            </h4>
            <div
              id="business-collapse-1"
              className="collapse show"
              data-parent="#business-accordion"
            >
              <div className="tab">
                <BusinessTab />

                <div className="billing-automation-swiper">
                  <div className="container">
                    <h2 className="title">Highlight Menu</h2>

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

                <div className="row d-none d-xl-flex product-management-title">
                  <div className="col-8">
                    <p className="text-warning">Key Features</p>
                  </div>
                  <div className="col-4 pl-0">
                    <p className="text-warning ml-n2">Business Benefits</p>
                  </div>
                </div>

                {[...Array(6)].map((x, i) => {
                  return <ProductManagement key={x} />;
                })}
                <BusinessFooter />
              </div>
            </div>
          </div>

          <div>
            <h4
              className="footer-links-toggle d-flex align-items-center d-xl-none"
              data-toggle="collapse"
              data-target="#business-collapse-2"
            >
              <i className="fas fa-id-card"></i>
              <span className="ml-2 mr-auto">Profile</span>

              <i className="fas fa-angle-down icon-rotates"></i>
            </h4>
            <div
              id="business-collapse-2"
              className="collapse"
              data-parent="#business-accordion"
            >
              <div className="tab">
                <BusinessTabTwo />

                <div className="billing-automation-swiper">
                  <div className="container">
                    <h2 className="title">Highlight Menu</h2>

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

                <div className="row d-none d-xl-flex product-management-title">
                  <div className="col-8">
                    <p className="text-warning">Key Features</p>
                  </div>
                  <div className="col-4 pl-0">
                    <p className="text-warning">Business Benefits</p>
                  </div>
                </div>

                {[...Array(6)].map((x, i) => {
                  return <ProductManagement key={x} />;
                })}
                <BusinessFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="business-feature networks-feature">
        <div className="container">
          <div className="content">
            <h5 className="title">Rich Features with Max Impacts</h5>
            <p className="subtitle">It’s not a tools, it’s a robust process</p>

            <p className="text">
              Gyloop has been developed by customer experiences, and bring
              customer value on top of application features. Major business use
              case transactions are ready to used in this platform, and built
              with providing maximum change impacts.
            </p>
            <p className="text">
              Gyloop has been designed to give you best experience to run your
              business, to connect with your partners, and leverage business
              opportunity at the same time. You will adopt the revolutionary
              business application to robust your business processes.
            </p>

            <a href="solution.html" className="gyloop-link d-block">
              Learn More
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="business-pricing networks-pricing">
        <div className="container">
          <h3 className="title">Gyloop Networks Pricing</h3>
          <p className="subtitle">
            Perform your business better with affordable subscription costs
          </p>

          <div className="row">
            <div className="col-12 col-md-3 px-md-1 px-xl-2">
              <div className="card border-0 rounded-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 col-md-12">
                      <h5 className="card-title">
                        <div>
                          <Image
                            className="logo-price mr-0"
                            src="/img/icon_bagde_volunteer.png"
                            alt="gyloop-icon-badge-volunterr" width={0} height={0} sizes='100'
                          />
                          <Image
                            className="logo-price mr-0"
                            src="/img/icon_bagde_functional.png"
                            alt="gyloop-icon-badge-functional" width={0} height={0} sizes='100'
                          />
                          <Image
                            className="logo-price"
                            src="/img/icon_bagde_professional.png"
                            alt="gyloop-icon-badge-professional" width={0} height={0} sizes='100'
                          />
                        </div>
                        <span>Business</span>
                      </h5>

                      <p className="card-text">
                        Existing Gyloop Business User has full network access
                      </p>
                    </div>
                    <div className="col-4 col-md-12">
                      <h3 className="price">
                        <span>FREE</span>
                      </h3>

                      <p className="price-info">
                        /user/month <br />
                        (billed annually)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a
                    href="subscribe-verified.html"
                    className="btn btn-primary btn-block gyloop-btn"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-9 px-md-1 px-xl-2">
              <div className="card card-side border-0 rounded-0 h-100">
                <div className="card-body text-md-left">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <h5 className="card-title justify-content-md-start text-md-left align-items-md-start">
                        <span>Gyloop Networks</span>
                      </h5>

                      <p className="card-text card-text-lg mb-2">
                        Connect with trusted and qualified supplier and buyers
                        across industry and locations.
                      </p>
                      <p className="card-text card-text-lg mb-2">
                        Discover the full features of Gyloop Networks for free
                        of subscription cost using your existing Gyloop Business
                        User*.
                      </p>

                      <hr className="d-none d-md-block" />

                      <p className="card-text mb-2">
                        Module Includes : Miniweb, Networks
                      </p>
                      <p className="card-text">
                        *User : Volunteer, Functional, Professional
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a
                    href="subscribe-professional.html"
                    className="btn btn-primary btn-block gyloop-btn"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="business-pricing business-faq" id="faq-accordion">
        <div className="container">
          <h3 className="title">Frequently Asked Question</h3>
          <p className="subtitle">
            Get answers to the most-asked questions about Gyloop Networks.
          </p>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-1"
                aria-expanded="true"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div
              className="collapse show"
              id="faq-1"
              data-parent="#faq-accordion"
            >
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-2"
                aria-expanded="false"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div className="collapse" id="faq-2" data-parent="#faq-accordion">
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-3"
                aria-expanded="false"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div className="collapse" id="faq-3" data-parent="#faq-accordion">
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-4"
                aria-expanded="false"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div className="collapse" id="faq-4" data-parent="#faq-accordion">
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-5"
                aria-expanded="false"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div className="collapse" id="faq-5" data-parent="#faq-accordion">
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card rounded-0">
            <div className="card-header">
              <h4
                className="card-title d-flex align-items-start mb-0"
                data-toggle="collapse"
                data-target="#faq-6"
                aria-expanded="false"
              >
                <i className="far fa-plus-circle"></i>
                <i className="far fa-minus-circle"></i>
                <span>
                  I’m a Verified User, may I use the Gyloop Networks Apps?
                </span>
              </h4>
            </div>

            <div className="collapse" id="faq-6" data-parent="#faq-accordion">
              <div className="card-body">
                <div className="card-text">
                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>

                  <p>
                    No, you can’t access the Gyloop Networks Apps with Verified
                    User, you need to upgrade your User to enjoy more feature of
                    Gyloop Business and get the access to Gyloop Networks.
                  </p>
                </div>

                <a
                  href="business.html?s=business-pricing"
                  className="gyloop-link d-block"
                >
                  Learn More User Comparison
                  <i className="fas fa-angle-right"></i>
                </a>
                <Link
                  href="/SubscribeProfessional"
                  className="gyloop-link d-block"
                >
                  Upgrade User
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="business-cta">
        <div className="container">
          <h3 className="title">Start your planning, and feel the change</h3>
          <a href="product.html" className="gyloop-link">
            <i className="far fa-chevron-circle-right"></i>
            Get Started
          </a>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer business-footer networks-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Let’s Build Networks</h3>
            <p className="subtitle">
              Ask more about people, culture, or development program
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="live-demo.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                System Demo
              </a>
              <a href="contact-us.html" className="btn btn-primary gyloop-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
