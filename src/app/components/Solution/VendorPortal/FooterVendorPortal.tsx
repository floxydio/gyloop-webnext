import '@/style/style.min.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

library.add(faLinkedin, faInstagram, faYoutube, faFacebookSquare, faTwitter);

interface FooterContentEntities {
  id: number;
  lang_code: string;
  img_logo: string;
  axin_link: string;
  axyt_link: string;
  axfb_link: string;
  axtw_link: string;
  axig_link: string;
  ax_clor: string;
  shrt_desc: string;
  shrt_clor: string;
  axg1_capt: string;
  axg1_clor: string;
  axg1_publ: boolean;
  axg2_capt: string;
  axg2_clor: string;
  axg2_publ: boolean;
  axg3_capt: string;
  axg3_clor: string;
  axg3_publ: boolean;
  submit_type: number;
  createdAt: Date;
  updateAt: Date;
}

export default function FooterVendorPortal({
  dataFooter,
}: {
  dataFooter: FooterContentEntities[];
}) {
  const [cookieSetting, setCookieSetting] = useState();

  function setCookie(name: string, value: string | boolean, days: number) {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  function accept_cookie(e: React.FormEvent<HTMLButtonElement>) {
    setCookie('accept_cookie_date', true, 30);
    const popupCookieElement = document.querySelector('.popup-cookie');
    if (popupCookieElement) {
      popupCookieElement.classList.add('d-none');
    }
  }
  return (
    <>
      <div className="nav-overlay d-none"></div>

      {dataFooter.map((data) => {
        return (
          <div key={data.id}>
            {data.submit_type === 1 ? (
              <footer>
                <div className="bg-darker-blue">
                  <div className="container">
                    <div className="d-flex footer-top">
                      <div className="footer-col order-1 order-xl-0">
                        <div className="mb-3">
                          <Link href="/">
                            <Image
                              priority
                              className="logo-web-lg"
                              src={`${process.env.IMAGE_HOME}${data.img_logo}`}
                              alt="gyloop-logo"
                              width={0}
                              height={0}
                              sizes="100"
                            />
                          </Link>
                        </div>

                        <ul className="footer-social-links list-unstyled d-flex mb-3">
                          <li>
                            <Link href={`${data.axin_link}`} target="_blank">
                              <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </Link>
                          </li>
                          <li>
                            <Link href={`${data.axyt_link}`} target="_blank">
                              <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </Link>
                          </li>
                          <li>
                            <Link href={`${data.axfb_link}`} target="_blank">
                              <FontAwesomeIcon
                                icon={['fab', 'facebook-square']}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`${data.axtw_link}`} target="_blank">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </Link>
                          </li>
                          <li>
                            <Link href={`${data.axig_link}`} target="_blank">
                              <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </Link>
                          </li>
                        </ul>

                        <address className="text-white footer-address">
                          KS Tubun Raya 37, Jakarta Pusat, Jakarta, Indonesia,
                          10260, +622158516224
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
                                  <Link
                                    aria-label="Product Overview"
                                    href="/Product"
                                  >
                                    Gyloop Overview
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    aria-label="Solutions Overview"
                                    href="/Solutions"
                                  >
                                    Explore Solutions
                                  </Link>
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
                                  <Link href="/Product/Network">Networks</Link>
                                </li>
                                <li>
                                  <a href="404-page-not-found.html">
                                    Marketplace
                                  </a>
                                </li>
                                <li>
                                  <Link href="/About/Campaign">Campaign</Link>
                                </li>
                                <li>
                                  <Link href="/About/NewsEvent">
                                    News and Events
                                  </Link>
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
                                <Link
                                  aria-label="Product Overview"
                                  href="/Product"
                                >
                                  Gyloop Overview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  aria-label="Solutions Overview"
                                  href="/Solutions"
                                >
                                  Explore Solutions
                                </Link>
                              </li>
                              <li>
                                <a href="library.html">Business Use Cases</a>
                              </li>
                              <li>
                                <Link href="/Product/Business?s=business-pricing">
                                  Product Pricing
                                </Link>
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
                                <a href="404-page-not-found.html">
                                  Marketplace
                                </a>
                              </li>
                              <li>
                                <Link href="/About/Campaign">Campaign</Link>
                              </li>
                              <li>
                                <Link href="/About/NewsEvent">
                                  News and Events
                                </Link>
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
                        &copy; 2023 Gyloop. All rights reserved.
                      </div>

                      <div className="footer-col footer-bottom-links">
                        <Link className="text-white" href="/PrivacyPolicy">
                          Privacy Policy
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/TermsOfServices">
                          Terms of Services
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/CookiePreferences">
                          Cookie Preferences
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/ContactUs">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            ) : (
              <footer>
                <div className="bg-darker-blue">
                  <div className="container">
                    <div className="d-flex footer-top">
                      <div className="footer-col order-1 order-xl-0">
                        <div className="mb-3">
                          <Link href="/">
                            <Image
                              priority
                              className="logo-web-lg"
                              src={`${process.env.IMAGE_HOME}`}
                              alt="gyloop-logo-white"
                              width={0}
                              height={0}
                              sizes="100"
                            />
                          </Link>
                        </div>

                        <ul className="footer-social-links list-unstyled d-flex mb-3">
                          <li>
                            <Link href="https://linkedin.com/" target="_blank">
                              <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://youtube.com/" target="_blank">
                              <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://facebook.com/" target="_blank">
                              <FontAwesomeIcon
                                icon={['fab', 'facebook-square']}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/" target="_blank">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://instagram.com/" target="_blank">
                              <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </Link>
                          </li>
                        </ul>

                        <address className="text-white footer-address">
                          KS Tubun Raya 37, Jakarta Pusat, Jakarta, Indonesia,
                          10260, +622158516224
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
                                  <Link
                                    aria-label="Product Overview"
                                    href="/Product"
                                  >
                                    Gyloop Overview
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    aria-label="Solutions Overview"
                                    href="/Solutions"
                                  >
                                    Explore Solutions
                                  </Link>
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
                                  <Link href="/Product/Network">Networks</Link>
                                </li>
                                <li>
                                  <a href="404-page-not-found.html">
                                    Marketplace
                                  </a>
                                </li>
                                <li>
                                  <Link href="/About/Campaign">Campaign</Link>
                                </li>
                                <li>
                                  <Link href="/About/NewsEvent">
                                    News and Events
                                  </Link>
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
                                <Link
                                  aria-label="Product Overview"
                                  href="/Product"
                                >
                                  Gyloop Overview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  aria-label="Solutions Overview"
                                  href="/Solutions"
                                >
                                  Explore Solutions
                                </Link>
                              </li>
                              <li>
                                <a href="library.html">Business Use Cases</a>
                              </li>
                              <li>
                                <Link href="/Product/Business?s=business-pricing">
                                  Product Pricing
                                </Link>
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
                                <a href="404-page-not-found.html">
                                  Marketplace
                                </a>
                              </li>
                              <li>
                                <Link href="/About/Campaign">Campaign</Link>
                              </li>
                              <li>
                                <Link href="/About/NewsEvent">
                                  News and Events
                                </Link>
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
                        &copy; 2023 Gyloop. All rights reserved.
                      </div>

                      <div className="footer-col footer-bottom-links">
                        <Link className="text-white" href="/PrivacyPolicy">
                          Privacy Policy
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/TermsOfServices">
                          Terms of Services
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/CookiePreferences">
                          Cookie Preferences
                        </Link>
                        <span className="divider"></span>
                        <Link className="text-white" href="/ContactUs">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            )}
          </div>
        );
      })}

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
                          onClick={(e) => accept_cookie(e)}
                        >
                          <i className="far fa-check mr-1"></i>
                          OK
                        </button>
                        <Link
                          href="/CookiePreferences"
                          className="gyloop-link text-light"
                          target="_blank"
                        >
                          Cookie Preferences Information
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-xl-block">
                  <Link
                    href="/CookiePreferences"
                    className="gyloop-link text-light"
                    target="_blank"
                  >
                    Cookie Preferences Information
                  </Link>
                  <button
                    className="btn btn-primary gyloop-btn ml-3"
                    type="button"
                    onClick={(e) => accept_cookie(e)}
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
