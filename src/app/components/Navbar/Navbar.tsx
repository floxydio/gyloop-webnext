import '@/style/style.min.css';
import '@/style/icon.css';
import '@/style/style.min.css';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Navbar() {
  const [openingSearchBar, setOpeningSearchBar] = React.useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (openingSearchBar) {
      inputRef.current?.focus();
      const timeout = setTimeout(() => {
        setOpeningSearchBar(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [openingSearchBar]);

  const handleSearchBarOpen = () => {
    // router.push()
    setOpeningSearchBar(true);
  };

  const handleSearchBarClose = () => {
    setOpeningSearchBar(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-transparent">
        <div className="container align-items-center">
          <a className="navbar-brand d-flex mr-5" href="index.html">
            <Image
              className="logo-web-lg"
              src="/img/logo-gyloop-white.png"
              alt="gyloop-logo-white"
              width={0}
              height={0}
              sizes="100"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="far fa-circle fa-stack-2x"></i>
              <i className="fas fa-bars fa-stack-1x"></i>
              <i className="fas fa-arrow-right fa-stack-1x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="nav-search-off navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="product.html"
                  aria-expanded="false"
                >
                  Products
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="business.html">
                    <Image
                      src="/img/logo-business-transparent-black.png"
                      alt="gyloop-logo-business-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Business</span>
                  </a>
                  <a className="dropdown-item" href="networks.html">
                    <Image
                      src="/img/logo-networks-transparent-black.png"
                      alt="gyloop-logo-network-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Networks</span>
                  </a>
                  <a className="dropdown-item" href="connector.html">
                    <Image
                      src="/img/logo-connector-transparent-black.png"
                      alt="gyloop-logo-connector-transparent"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Connector</span>
                  </a>
                  <a className="dropdown-item" href="provider.html">
                    <Image
                      src="/img/logo-provider-transparent-black.png"
                      alt="gyloop-logo-provider-transparent"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Provider</span>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="solution.html"
                  aria-expanded="false"
                >
                  Solutions
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="sales-automation.html">
                    <span>Sales Automation</span>
                  </a>
                  <a className="dropdown-item" href="catalog-management.html">
                    <span>Catalog Management</span>
                  </a>
                  <a className="dropdown-item" href="sourcing-management.html">
                    <span>Sourcing Management</span>
                  </a>
                  <a className="dropdown-item" href="e-procurement.html">
                    <span>E-Procurement</span>
                  </a>
                  <a className="dropdown-item" href="customer-portal.html">
                    <span>Customer Portal</span>
                  </a>
                  <a className="dropdown-item" href="vendor-portal.html">
                    <span>Vendor Portal</span>
                  </a>
                  <a className="dropdown-item" href="billing-automation.html">
                    <span>Billing Automation</span>
                  </a>
                  <a className="dropdown-item" href="invoice-automation.html">
                    <span>Invoice Automation</span>
                  </a>
                  <a className="dropdown-item" href="business-networking.html">
                    <span>Business Networking</span>
                  </a>
                  <a className="dropdown-item" href="service-provider.html">
                    <span>Service Provider</span>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="resource.html"
                  aria-expanded="false"
                >
                  Resources
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="library.html">
                    <span>Library</span>
                  </a>
                  <a className="dropdown-item" href="live-demo.html">
                    <span>System Demo</span>
                  </a>
                  <a className="dropdown-item" href="blogs.html">
                    <span>Blogs</span>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="about.html" aria-expanded="false">
                  About Us
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="leadership.html">
                    <span>Gyloop Leadership</span>
                  </a>
                  <a className="dropdown-item" href="news-and-event.html">
                    <span>News and Events</span>
                  </a>
                  <a className="dropdown-item" href="campaign.html">
                    <span>Gyloop Campaign</span>
                  </a>
                  <a className="dropdown-item" href="culture.html">
                    <span>Gyloop Culture</span>
                  </a>
                </div>
              </li>
            </ul>
            <ul
              className={`nav-search-off ${
                openingSearchBar ? 'd-none' : ''
              }navbar-nav`}
            >
              <li className="nav-item nav-item-lang position-relative">
                <a
                  className="nav-link mr-0"
                  href="preventDefault()"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe-americas"></i>
                  <span className="d-xl-none ml-2">Language</span>
                </a>
                <div className="dropdown-menu dropdown-lang dropdown-menu-right">
                  <button className="dropdown-item active" type="button">
                    <Image
                      className="icon-lang"
                      src="/img/icon-lang-en.png"
                      alt="English"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    English
                  </button>
                  <button className="dropdown-item" type="button">
                    <Image
                      className="icon-lang"
                      src="/img/icon-lang-id.png"
                      alt="Indonesia"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    Bahasa
                  </button>
                </div>
              </li>
              <li
                className={`nav-item nav-search-off ${
                  openingSearchBar ? 'd-none' : ''
                }`}
              >
                <a
                  className="nav-link mr-0"
                  href="preventDefault()"
                  onClick={handleSearchBarOpen}
                >
                  <i className="fas fa-search"></i>
                  <span className="d-xl-none ml-2">Search</span>
                </a>
              </li>
            </ul>
            <form
              id="navbar-search"
              className="nav-search-on d-none gyloop-form w-100"
              action="search-result.html"
              method="get"
            >
              <div className="form-group mb-0">
                <div className="input-group">
                  <input
                    type="text"
                    name="q"
                    id="q"
                    className="form-control border-right-0"
                    placeholder="Search for anything"
                    value="Search for anything"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-outline-light bg-white border-left-0 border-right-0"
                    >
                      <i className="far fa-search text-muted"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary border-left-0"
                      onClick={handleSearchBarClose}
                    >
                      <i className="far fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <a
              className="gyloop-link text-nowrap ml-xl-3"
              href="contact-us.html"
            >
              <i className="fas fa-phone fa-flip-horizontal d-xl-none mr-2"></i>
              Contact Us
            </a>
            <a className="btn btn-primary btn-login ml-xl-4" href="login.html">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
