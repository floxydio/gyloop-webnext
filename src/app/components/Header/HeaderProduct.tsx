import '@/style/style.min.css';
import Link from 'next/link';

export default function HeaderProduct() {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-transparent">
        <div className="container align-items-center">
          <Link className="navbar-brand d-flex mr-5" href="/">
            <img
              className="logo-web-lg"
              src="/img/logo-gyloop-white.png"
              alt="LOGO gyloop"
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
            <span className="fa-stack" style={{verticalAlign: 'top'}}>
              <i className="far fa-circle fa-stack-2x"></i>
              <i className="fas fa-bars fa-stack-1x"></i>
              <i className="fas fa-arrow-right fa-stack-1x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="nav-search-off navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  href="/Product"
                  aria-expanded="false"
                >
                  Products
                  <i className="fas fa-angle-down icon-rotates"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" href="/Product/Business">
                    <img
                      src="/img/logo-business-transparent-black.png"
                      alt=""
                      className="d-none d-xl-inline"
                    />
                    <span>Business</span>
                  </Link>
                  <a className="dropdown-item" href="networks.html">
                    <img
                      src="/img/logo-networks-transparent-black.png"
                      alt=""
                      className="d-none d-xl-inline"
                    />
                    <span>Networks</span>
                  </a>
                  <Link className="dropdown-item" href="/Product/Connector">
                    <img
                      src="/img/logo-connector-transparent-black.png"
                      alt=""
                      className="d-none d-xl-inline"
                    />
                    <span>Connector</span>
                  </Link>
                  <Link className="dropdown-item" href="/Product/Provider">
                    <img
                      src="/img/logo-provider-transparent-black.png"
                      alt=""
                      className="d-none d-xl-inline"
                    />
                    <span>Provider</span>
                  </Link>
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
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe-americas"></i>
                  <span className="d-xl-none ml-2">Language</span>
                </a>
                <div className="dropdown-menu dropdown-lang dropdown-menu-right">
                  <button className="dropdown-item active" type="button">
                    <img
                      className="icon-lang"
                      src="/img/icon-lang-en.png"
                      alt="English"
                    />
                    English
                  </button>
                  <button className="dropdown-item" type="button">
                    <img
                      className="icon-lang"
                      src="/img/icon-lang-id.png"
                      alt="English"
                    />
                    Bahasa
                  </button>
                </div>
              </li>
              <li className="nav-item nav-search-off">
                <a
                  className="nav-link mr-0"
                  href="javascript:void(0)"
                  // onClick="open_search_bar()"
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
                      // onClick="close_search_bar()"
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
      </nav>
  
    </>
  );
}
