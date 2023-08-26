import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';

export default function Footer() {
  function setCookie(name: string, value: string, days: number) {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  useEffect(() => {
    setCookie('myCookie', 'cookieValue', 7); // Example usage
  }, []);

  return (
    <>
      <div className="nav-overlay d-none"></div>

      <footer>
        <div className="bg-darker-blue">
          <div className="container">
            <div className="d-flex footer-top">
              <div className="footer-col order-1 order-xl-0">
                <div className="mb-3">
                  <a href="index.html">
                    <img src="assets/logo-white-lg" />
                  </a>
                </div>

                <ul className="footer-social-links list-unstyled d-flex mb-3">
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>

                <address className="text-white footer-address">
                  KS Tubun Raya 37, Jakarta Pusat, Jakarta, Indonesia, 10260,
                  +622158516224
                </address>
              </div>

              <div className="footer-col order-0 order-xl-1 flex-fill mb-md-3 mb-xl-0">
                {/* <!-- mobile --> */}
                <div
                  className="d-md-none mt-4 mb-4 accordion"
                  id="footer-links-accordion"
                >
                  <div className="footer-links-collapse">
                    <h4
                      className="footer-links-toggle d-flex align-items-center"
                      data-toggle="collapse"
                      data-target="#footer-links-collapse-1"
                    >
                      <span className="mr-auto">Overview</span>
                      <i className="fas fa-angle-down icon-rotates"></i>
                    </h4>

                    <div
                      id="footer-links-collapse-1"
                      className="collapse"
                      data-parent="#footer-links-accordion"
                    >
                      <ul className="list-unstyled footer-links">
                        <li>
                          <a href="product.html">Gyloop Overview</a>
                        </li>
                        <li>
                          <a href="solution.html">Explore Solutions</a>
                        </li>
                        <li>
                          <a href="library.html">Business Use Cases</a>
                        </li>
                        <li>
                          <a href="business.html?s=business-pricing">
                            Product Pricing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-links-collapse">
                    <h4
                      className="footer-links-toggle d-flex align-items-center"
                      data-toggle="collapse"
                      data-target="#footer-links-collapse-2"
                    >
                      <span className="mr-auto">Resources</span>
                      <i className="fas fa-angle-down icon-rotates"></i>
                    </h4>

                    <div
                      id="footer-links-collapse-2"
                      className="collapse"
                      data-parent="#footer-links-accordion"
                    >
                      <ul className="list-unstyled footer-links">
                        <li>
                          <a href="library.html">Library</a>
                        </li>
                        <li>
                          <a href="live-demo.html">System Demo</a>
                        </li>
                        <li>
                          <a href="blogs.html">Blogs</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-links-collapse">
                    <h4
                      className="footer-links-toggle d-flex align-items-center"
                      data-toggle="collapse"
                      data-target="#footer-links-collapse-3"
                    >
                      <span className="mr-auto">Link</span>
                      <i className="fas fa-angle-down icon-rotates"></i>
                    </h4>

                    <div
                      id="footer-links-collapse-3"
                      className="collapse"
                      data-parent="#footer-links-accordion"
                    >
                      <ul className="list-unstyled footer-links">
                        <li>
                          <a href="networks.html">Networks</a>
                        </li>
                        <li>
                          <a href="404-page-not-found.html">Marketplace</a>
                        </li>
                        <li>
                          <a href="campaign.html">Campaigns</a>
                        </li>
                        <li>
                          <a href="news-and-event.html">News and Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- tablet & pc --> */}
                <div className="d-none d-md-flex justify-content-between">
                  <div className="footer-col">
                    <h4 className="footer-links-heading">Overview</h4>

                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="product.html">Gyloop Overview</a>
                      </li>
                      <li>
                        <a href="solution.html">Explore Solutions</a>
                      </li>
                      <li>
                        <a href="library.html">Business Use Cases</a>
                      </li>
                      <li>
                        <a href="business.html?s=business-pricing">
                          Product Pricing
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-col">
                    <h4 className="footer-links-heading">Resources</h4>

                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="library.html">Library</a>
                      </li>
                      <li>
                        <a href="live-demo.html">System Demo</a>
                      </li>
                      <li>
                        <a href="blogs.html">Blogs</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-col footer-col-end">
                    <h4 className="footer-links-heading">Links</h4>

                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="networks.html">Networks</a>
                      </li>
                      <li>
                        <a href="404-page-not-found.html">Marketplace</a>
                      </li>
                      <li>
                        <a href="campaign.html">Campaigns</a>
                      </li>
                      <li>
                        <a href="news-and-event.html">News and Events</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-darkest-blue">
          <div className="container">
            <div className="d-flex align-items-center footer-bottom">
              <div className="footer-col text-white">
                &copy; 2020 Gyloop. All rights reserved.
              </div>

              <div className="footer-col footer-bottom-links">
                <a className="text-white" href="privacy-policy.html">
                  Privacy Policy
                </a>
                <span className="divider"></span>
                <a className="text-white" href="term-of-services.html">
                  Terms of Services
                </a>
                <span className="divider"></span>
                <a className="text-white" href="cookie-preferences.html">
                  Cookie Preferences
                </a>
                <span className="divider"></span>
                <a className="text-white" href="contact-us.html">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="popup-cookie position-fixed fixed-bottom d-none">
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="container px-0">
              <div className="d-xl-flex align-items-xl-center">
                <div className="mr-xl-auto">
                  <h5 className="card-title">Cookie Preference</h5>

                  <div className="d-flex">
                    <i className="icon-warning text-white far fa-exclamation-triangle"></i>

                    <div>
                      <p className="card-text mr-auto">
                        We use cookies to improve your experience on our site.
                        To find out more, read our
                        <a
                          href="privacy-policy.html"
                          className="gyloop-link text-light"
                          target="_blank"
                        >
                          privacy policy
                        </a>
                        . <br />
                        By using our sites, you agree to our use of cookies.
                      </p>

                      <div className="d-xl-none">
                        <button
                          className="btn btn-primary gyloop-btn mr-3"
                          type="button"
                          //   onClick="accept_cookie()"
                        >
                          <i className="far fa-check mr-1"></i>
                          OK
                        </button>
                        <a
                          href="cookie-preferences.html"
                          className="gyloop-link text-light"
                          target="_blank"
                        >
                          More information
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-xl-block">
                  <a
                    href="cookie-preferences.html"
                    className="gyloop-link text-light"
                    target="_blank"
                  >
                    More information
                  </a>
                  <button
                    className="btn btn-primary gyloop-btn ml-3"
                    type="button"
                    // onClick="accept_cookie()"
                  >
                    <i className="far fa-check mr-1"></i>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
