import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import 'popper.js';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeaderNoMenuTransparent({ type }: { type: number } = { type: 0 }) {
  const [currentDropdown, setCurrentDropdown] = useState(0);


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);


  return (
    <>
      {type === 0 ? <nav className="navbar navbar-expand-xl navbar-dark bg-transparent">
        <div className="container align-items-center">
          <Link className="navbar-brand d-flex mr-5" href="/">
            <Image
              className="logo-web-lg"
              src="/img/logo-gyloop-white.png"
              alt="LOGO gyloop"
              width={0}
              height={0}
              sizes="100"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => console.log('clicked')}
          >
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="far fa-circle fa-stack-2x"></i>
              <i className="fas fa-bars fa-stack-1x"></i>
              <i className="fas fa-arrow-right fa-stack-1x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="nav-search-off navbar-nav mr-auto">
              <li
                className={`nav-item dropdown ${currentDropdown === 1 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(1)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <Link
                  className="nav-link"
                  href="/Product"
                  aria-expanded={currentDropdown === 1 ? 'true' : 'false'}
                >
                  Products
                  <i className="fas fa-angle-down icon-rotates"></i>
                </Link>
                <div
                  className={`dropdown-menu ${currentDropdown === 1 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" href="/Product/Business">
                    <Image
                      src="/img/logo-business-transparent-black.png"
                      alt="gyloop-business-transparent-"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Business</span>
                  </Link>
                  <Link className="dropdown-item" href="/Product/Network">
                    <Image
                      src="/img/logo-networks-transparent-black.png"
                      alt="gyloop-logo-network-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Networks</span>
                  </Link>
                  <Link className="dropdown-item" href="/Product/Connector">
                    <Image
                      src="/img/logo-connector-transparent-black.png"
                      alt="gyloop-logo-connector-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Connector</span>
                  </Link>
                  <Link className="dropdown-item" href="/Product/Provider">
                    <Image
                      src="/img/logo-provider-transparent-black.png"
                      alt="gyloop-logo-provider-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Provider</span>
                  </Link>
                </div>
              </li>
              <li
                className={`nav-item dropdown ${currentDropdown === 2 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(2)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <a
                  className="nav-link"
                  href="solution.html"
                  aria-expanded={currentDropdown === 2 ? 'true' : 'false'}
                >
                  Solutions
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div
                  className={`dropdown-menu ${currentDropdown === 2 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    className="dropdown-item"
                    href="/Solutions/SalesAutomation"
                  >
                    <span>Sales Automation</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/CatalogManagement"
                  >
                    <span>Catalog Management</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/SourcingManagement"
                  >
                    <span>Sourcing Management</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/EProcurement"
                  >
                    <span>E-Procurement</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/CustomerPortal"
                  >
                    <span>Customer Portal</span>
                  </Link>
                  {/* <Link
                    className="dropdown-item"
                    href="/Solutions/VendorPortal"
                  >
                    <span>Vendor Portal</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/BillingAutomation"
                  >
                    <span>Billing Automation</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/InvoiceAutomation"
                  >
                    <span>Invoice Automation</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/BusinessNetworking"
                  >
                    <span>Business Networking</span>
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/Solutions/ServiceProvider"
                  >
                    <span>Service Provider</span>
                  </Link> */}
                </div>
              </li>
              <li
                className={`nav-item dropdown ${currentDropdown === 3 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(3)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <a
                  className="nav-link"
                  href="resource.html"
                  aria-expanded={currentDropdown === 3 ? 'true' : 'false'}
                >
                  Resources
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div
                  className={`dropdown-menu ${currentDropdown === 3 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
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
              <li
                className={`nav-item dropdown ${currentDropdown === 4 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(4)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <Link
                  className="nav-link"
                  href="/About"
                  aria-expanded={currentDropdown === 4 ? 'true' : 'false'}
                >
                  About Us
                  <i className="fas fa-angle-down icon-rotates"></i>
                </Link>
                <div
                  className={`dropdown-menu ${currentDropdown === 4 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" href="/About/Leadership">
                    <span>Gyloop Leadership</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/NewsEvent">
                    <span>News and Events</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/Campaign">
                    <span>Gyloop Campaign</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/Culture">
                    <span>Gyloop Culture</span>
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="nav-search-off navbar-nav">
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
                  <button className="dropdown-item" type="button">
                    <Image
                      className="icon-lang"
                      src="/img/icon-lang-ger.png"
                      alt="Germany"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    Germany
                  </button>
                  <button className="dropdown-item" type="button">
                    <Image
                      className="icon-lang"
                      src="/img/icon-lang-fr.png"
                      alt="France"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    France
                  </button>
                </div>
              </li>
              <li className="nav-item nav-search-off">
                <a
                  className="nav-link mr-0"
                  href="preventDefault()"
                // onClick={() => openingSearchBar()}
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
                    // onClick={() => closeSearchBar()}
                    >
                      <i className="far fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <Link className="gyloop-link text-nowrap ml-xl-3" href="/ContactUs">
              <i className="fas fa-phone fa-flip-horizontal d-xl-none mr-2"></i>
              Contact Us
            </Link>
            <Link className="btn btn-primary btn-login ml-xl-4" href="/Login">
              Login
            </Link>
          </div>
        </div>
      </nav> : <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
        <div className="container align-items-center">
          <Link className="navbar-brand d-flex mr-5" href="/">
            <Image
              className="logo-web-lg"
              src="/img/logo-gyloop-white.png"
              alt="LOGO gyloop"
              width={0}
              height={0}
              sizes="100"
            />
          </Link>
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
              <li
                className={`nav-item dropdown ${currentDropdown === 1 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(1)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <Link
                  className="nav-link"
                  href="/Product"
                  aria-expanded={currentDropdown === 1 ? 'true' : 'false'}
                >
                  Products
                  <i className="fas fa-angle-down icon-rotates"></i>
                </Link>
                <div
                  className={`dropdown-menu ${currentDropdown === 1 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
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
                      alt="gyloop-logo-networks-transparent-black"
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
                      alt="gyloop-logo-connector-transparent-black"
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
                      alt="gyloop-logo-provider-transparent-black"
                      className="d-none d-xl-inline"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <span>Provider</span>
                  </a>
                </div>
              </li>
              <li
                className={`nav-item dropdown ${currentDropdown === 2 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(2)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <a
                  className="nav-link"
                  href="solution.html"
                  aria-expanded={currentDropdown === 2 ? 'true' : 'false'}
                >
                  Solutions
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div
                  className={`dropdown-menu ${currentDropdown === 2 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
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
              <li
                className={`nav-item dropdown ${currentDropdown === 3 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(3)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <a
                  className="nav-link"
                  href="resource.html"
                  aria-expanded={currentDropdown === 3 ? 'true' : 'false'}
                >
                  Resources
                  <i className="fas fa-angle-down icon-rotates"></i>
                </a>
                <div
                  className={`dropdown-menu ${currentDropdown === 3 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
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
              <li
                className={`nav-item dropdown ${currentDropdown === 4 ? 'show' : ''
                  }`}
                onMouseEnter={() => setCurrentDropdown(4)}
                onMouseLeave={() => setCurrentDropdown(0)}
              >
                <Link
                  className="nav-link"
                  href="/About"
                  aria-expanded={currentDropdown === 4 ? 'true' : 'false'}
                >
                  About Us
                  <i className="fas fa-angle-down icon-rotates"></i>
                </Link>
                <div
                  className={`dropdown-menu ${currentDropdown === 4 ? 'show' : ''
                    }`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" href="/About/Leadership">
                    <span>Gyloop Leadership</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/NewsEvent">
                    <span>News and Events</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/Campaign">
                    <span>Gyloop Campaign</span>
                  </Link>
                  <Link className="dropdown-item" href="/About/Culture">
                    <span>Gyloop Culture</span>
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="nav-search-off navbar-nav">
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
              <li className="nav-item nav-search-off">
                <a
                  className="nav-link mr-0"
                  href="preventDefault()"
                // onClick={() => openingSearchBar()}
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
                    // onClick={() => closeSearchBar()}
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
            <Link className="btn btn-primary btn-login ml-xl-4" href="/Login">
              Login
            </Link>
          </div>
        </div>
      </nav>}

    </>
  );
}
