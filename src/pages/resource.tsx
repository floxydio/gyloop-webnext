import NextSEO from '@/app/components/NextHead/NextSEO';
import Image from 'next/image';
import '@/style/style.min.css';
import '@/style/icon.css';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Resource() {
    const router = useRouter()

    return (
        <>
            <NextSEO seoHead={{
                title: "Gyloop - Resource",
                metaDescription: "Gyloop - Resource",
                metaKeywords: "Gyloop - Resource",
                metaTitle: "Gyloop - Resource",
                metaLocale: "en-US"
            }} />
            <HeaderNoMenuTransparent type={0} />

            <header className="header-bg-cover billing-automation-header d-flex align-items-end about-header resource-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-none d-md-block">
                            <div className="solution-header-text">
                                <p className="text-blue">FOCUS</p>
                                <p>MAKE</p>
                                <p>BUSINESS</p>
                                <p>CONNECTED</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <h1 className="title">Resource</h1>
                            <p className="subtitle">
                                Current business models are changing, the digital era push industry
                                to act more than ever, high performance now being as common standard
                                should be delivered. Gyloop bring industry values flying higher with
                                readiness of required solutions to solve most industry challenges.
                            </p>
                            <div className="solution-header-text d-md-none">
                                <h5 className="text-blue">FOCUS</h5>
                                <h5>MAKE</h5>
                                <h5>BUSINESS</h5>
                                <h5>CONNECTED</h5>
                            </div>
                            <div className="solution-header-button d-flex justify-content-center justify-content-md-start">
                                <Link
                                    href="/subscribe-professional"
                                    className="btn gyloop-btn btn-warning text-white"
                                >
                                    Get Start for Free
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="about-cards">
                <div className="container">
                    <div className="card border-0 rounded-0">
                        <div className="row">
                            <div className="col-12 col-md-6 pr-md-0">
                                <img
                                    src="img/illustrative_documentation.png"
                                    className="features-image img-fluid"
                                />
                            </div>
                            <div className="col-12 col-md-6 pl-md-0">
                                <div className="card-body">
                                    <p className="card-title features-title">Documentation</p>
                                    <div className="card-text features-text">
                                        <div className="d-md-none">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`${router.locale}/resource-library`} className="gyloop-link">
                                        Visit Library
                                        <i className="fas fa-angle-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 rounded-0">
                        <div className="row">
                            <div className="col-12 col-md-6 pr-md-0">
                                <div className="card-body">
                                    <p className="card-title features-title">Demo System</p>
                                    <div className="card-text features-text">
                                        <div className="d-md-none">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`${router.locale}/resource-livedemo`} className="gyloop-link">
                                        Go to Demo System
                                        <i className="fas fa-angle-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pl-md-0">
                                <img
                                    src="img/illustrative_demosystems.png"
                                    className="features-image img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 rounded-0">
                        <div className="row">
                            <div className="col-12 col-md-6 pr-md-0">
                                <img
                                    src="img/illustrative_blogs.png"
                                    className="features-image img-fluid"
                                />
                            </div>
                            <div className="col-12 col-md-6 pl-md-0">
                                <div className="card-body">
                                    <p className="card-title features-title">Blogs</p>
                                    <div className="card-text features-text">
                                        <div className="d-md-none">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your
                                                business connection, cause we understand that business are
                                                better built by strong relationships. Business entities are
                                                now easy to connect to the unlimited networks across
                                                industry and locations.
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`${router.locale}/resource-blog`} className="gyloop-link">
                                        Learn More
                                        <i className="fas fa-angle-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-overlay d-none" />
            <footer>
                <div className="bg-darker-blue">
                    <div className="container">
                        <div className="d-flex footer-top">
                            <div className="footer-col order-1 order-xl-0">
                                <div className="mb-3">
                                    <a href="index.html">
                                        <img
                                            priority
                                            className="logo-web-lg"
                                            src="img/logo-gyloop-white.png"
                                            alt="Logo GYLOOP"
                                        />
                                    </a>
                                </div>
                                <ul className="footer-social-links list-unstyled d-flex mb-3">
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/" target="_blank">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/" target="_blank">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                                <address className="text-white footer-address">
                                    KS Tubun Raya 37, Jakarta Pusat, Jakarta, Indonesia, 10260,
                                    +622158516224
                                </address>
                            </div>
                            <div className="footer-col order-0 order-xl-1 flex-fill mb-md-3 mb-xl-0">
                                {/* mobile */}
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
                                            <i className="fas fa-angle-down icon-rotates" />
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
                                            <i className="fas fa-angle-down icon-rotates" />
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
                                            <i className="fas fa-angle-down icon-rotates" />
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
                                {/* tablet & pc */}
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
                                © 2020 Gyloop. All rights reserved.
                            </div>
                            <div className="footer-col footer-bottom-links">
                                <a className="text-white" href="privacy-policy.html">
                                    Privacy Policy
                                </a>
                                <span className="divider" />
                                <a className="text-white" href="term-of-services.html">
                                    Terms of Services
                                </a>
                                <span className="divider" />
                                <a className="text-white" href="cookie-preferences.html">
                                    Cookie Preferences
                                </a>
                                <span className="divider" />
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
                                        <i className="icon-warning text-white far fa-exclamation-triangle" />
                                        <div>
                                            <p className="card-text mr-auto">
                                                We use cookies to improve your experience on our site. To
                                                find out more, read our
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
                                                // onclick="accept_cookie()"
                                                >
                                                    <i className="far fa-check mr-1" />
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
                                    // onclick="accept_cookie()"
                                    >
                                        <i className="far fa-check mr-1" />
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}