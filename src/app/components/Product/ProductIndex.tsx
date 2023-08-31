import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import Image from 'next/image';
export default function ProductIndex() {
  return (
    <>
    
    
    <div className="solution about-solution product">
        <div className="container">
            <div className="text-center">
                <p className="about-solution-title">
                    Explore Our Product
                </p>
                <p className="about-solution-text">
                    Gyloop offering a strategic portfolio for Customer Relationship, Supplier Relationship, Supply
                    Chain, Business Networking, Integration to various Third Party Application, and Specific Service
                    Provider.
                </p>
            </div>

            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="card card-product rounded-0 bg-transparent text-center">
                        <div className="card-body">
                            <h3 className="card-title">
                                CRM and SRM Apps
                            </h3>

                            <Link href="/Product/Business">
                                <Image style={{ width: '100%', height: 'auto' }} src="/img/logo-business.png" className="img-logo" width={0} height={0} sizes='100' alt='gyloop-logo-business'/>
                                <h5 className="link-title">BUSINESS</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card card-product rounded-0 bg-transparent text-center">
                        <div className="card-body">
                            <h3 className="card-title">
                                Businesss Networking
                            </h3>

                            <Link href="/Product/Network">
                                <Image style={{ width: '100%', height: 'auto' }} src="/img/logo-networks.png" className="img-logo" alt='gyloop-logo-network' width={0} height={0} sizes='100'/>
                                <h5 className="link-title">NETWORKS</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card card-product rounded-0 bg-transparent text-center">
                        <div className="card-body">
                            <h3 className="card-title">
                                3rd Party Integration
                            </h3>

                            <Link href="/Product/Connector">
                                <Image style={{ width: '100%', height: 'auto' }} src="/img/logo-connector.png" className="img-logo" width={0} height={0} sizes='100' alt='gyloop-logo-connector'/>
                                <h5 className="link-title">CONNECTOR</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card card-product rounded-0 bg-transparent text-center">
                        <div className="card-body">
                            <h3 className="card-title">
                                Specific Services
                            </h3>

                            <Link href="/Product/Provider">
                                <Image style={{ width: '100%', height: 'auto' }} src="/img/logo-provider.png" className="img-logo" width={0} height={0} sizes='100' alt='gyloop-logo-provider'/>
                                <h5 className="link-title">PROVIDER</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="footer-bg-cover billing-automation-footer about-subheader product-subheader">
        <div className="container justify-content-md-start">
            <div className="content text-white">

                <h3 className="title">
                    COLLABORATION
                </h3>
                <p className="subtitle">
                    Grow together with your customer and suppliers
                </p>

                <p className="solution-subheader-text">
                    make you and your partners have the same understanding, make you have
                    more business opportunities
                </p>

                <div className="d-flex justify-content-center justify-content-md-start">
                    <Link href="/SubscribeProfessional" className="btn btn-warning gyloop-btn text-white">Get Start for Free</Link>
                </div>

            </div>
        </div>
    </div>

    <div className="product-cards">
        <div className="container">

            <div className="card border-0 rounded-0 bg-light">
                <div className="card-body">
                    <p className="card-title d-flex align-items-center">
                        <Image  src="/img/logo-business-transparent-black.png" alt="gyloop-logo-business-transparent" className="logo-title" width={0} height={0} sizes='100'/>
                        <span>
                            Gyloop Business
                        </span>
                    </p>

                    <div className="card-text">
                        Business is the Gyloop Apps which provide the main business transaction: Customer Relationship
                        Management (CRM), Supplier Relationship Management (SRM), Inventory &amp; Warehouse, and Supply
                        Chain Management (SCM).
                    </div>
                    <div className="card-text">
                        Business is the Gyloop Apps which provide the main business transaction: Customer Relationship
                        Management (CRM), Supplier Relationship Management (SRM), Inventory &amp;Warehouse, and Supply
                        Chain
                        Management (SCM).
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6 order-md-1">
                            <Image style={{ width: '100%', height: 'auto' }} src="/img/illustrative-laptop2.png" className="card-image img-fluid" width={0} height={0} sizes='100' alt='gyloop-logo-illustrative'/>
                        </div>

                        <div className="col-12 col-md-6 order-md-0">
                            <ul className="list-unstyled">
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Manage Customer and Supplier, and easier for tracking the information
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Integrate and automate your documents to your customer and supplier documents
                                    concurrently
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Accelerate productivity with simplicity of business transaction
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Get faster insightful decision, by real time updates from your team and your
                                    business partners
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Get faster insightful decision, by real time updates from your team and your
                                    business partners
                                </li>
                            </ul>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-xl-center pl-md-3 pl-xl-0">
                                <Link href="/Product/Business" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Explore More</Link>
                                <a href="live-demo.html?s=gyloop-business" className="btn btn-primary gyloop-btn">Live Demo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card border-0 rounded-0">
                <div className="card-body">
                    <p className="card-title d-flex align-items-center">
                        <Image src="/img/logo-networks-transparent-black.png" alt="gyloop-logo-network" className="logo-title" width={0} height={0} sizes='100'/>
                        <span>
                            Gyloop Networks
                        </span>
                    </p>

                    <div className="card-text">
                        Gyloop provide Networks Apps to allow you extend your business connection, cause we understand
                        that business are better built by strong relationship. Business entities are now easy to connect
                        to the unlimited networks across industry and locations, united in the same platform with same
                        understanding.
                    </div>
                    <div className="card-text">
                        Gyloop provide Networks Apps to allow you extend your business connection, cause we understand
                        that business are better built by strong relationship. Business entities are now easy to connect
                        to the unlimited networks across industry and locations, united in the same platform with same
                        understanding.
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6">
                            <Image style={{ width: '100%', height: 'auto' }} src="/img/illustrative-laptop2.png" className="card-image img-fluid" alt='gyloop-logo-illustrartive' width={0} height={0} sizes='100'/>
                        </div>

                        <div className="col-12 col-md-6">
                            <ul className="list-unstyled">
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Easy to get the information your required product and the suppliers
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Easy to generate leads, and move to the deal faster by business connection and raise
                                    the opportunity
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Extend the visibility of supplier ranks, for make faster sourcing decision
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Enjoy selling and buying by more insightful informations meet with your business
                                    directions
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Enjoy selling and buying by more insightful informations meet with your business
                                    directions
                                </li>
                            </ul>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-xl-center pl-md-3 pl-xl-0">
                                <Link href="/Product/Network" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Explore More</Link>
                                <a href="live-demo.html?s=gyloop-networks" className="btn btn-primary gyloop-btn">Live Demo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card border-0 rounded-0 bg-light">
                <div className="card-body">
                    <p className="card-title d-flex align-items-center">
                        <Image  src="/img/logo-connector-transparent-black.png" alt="gyloop-logo-connector" className="logo-title" width={0} height={0} sizes='100'/>
                        <span>
                            Gyloop Connectors
                        </span>
                    </p>

                    <div className="card-text">
                        Gyloop Connectors is provided for making a seamless integration from your Gyloop Business
                        Transaction to the various back-end and front-end system. This apps support you to easy generate
                        connections by the configurable APIs.
                    </div>
                    <div className="card-text">
                        Gyloop Connectors is provided for making a seamless integration from your Gyloop Business
                        Transaction to the various back-end and front-end system. This apps support you to easy generate
                        connections by the configurable APIs.
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6 order-md-1">
                            <Image style={{ width: '100%', height: 'auto' }} src="/img/illustrative-laptop2.png" className="card-image img-fluid" width={0} height={0} sizes='100' alt='gyloop-logo-illustrative'/>
                        </div>

                        <div className="col-12 col-md-6 order-md-0">
                            <ul className="list-unstyled">
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Remove your limitation to build the best fit IT solution for your company by best
                                    practice of Gyloop interfaces
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Manage faster development to connect any systems, whether in the cloud or
                                    on-premises, on a unified platform
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Extend the capabilities to improve your service to your business partners
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Extend the capabilities to improve your service to your business partners
                                </li>
                            </ul>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-xl-center pl-md-3 pl-xl-0">
                                <Link href="/Product/Connector" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Explore More</Link>
                                <a href="live-demo.html" className="btn btn-primary gyloop-btn">Live Demo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card border-0 rounded-0">
                <div className="card-body">
                    <p className="card-title d-flex align-items-center">
                        <Image src="/img/logo-provider-transparent-black.png" alt="gyloop-logo-provider" className="logo-title" width={0} height={0} sizes='100'/>
                        <span>
                            Gyloop Provider
                        </span>
                    </p>

                    <div className="card-text">
                        {`Gyloop Provider is an Apps for giving you opportunity to collaborate your business service to
                        our Gyloop services, you can contribute to your service to our existing business model, creating
                        new own market with Gyloop's infrastructure, or fit out specific features or menus by released
                        apps on Gyloop marketplace.`}
                    </div>
                    <div className="card-text">
                        {`Gyloop Provider is an Apps for giving you opportunity to collaborate your business service to
                        our Gyloop services, you can contribute to your service to our existing business model, creating
                        new own market with Gyloop's infrastructure, or fit out specific features or menus by released
                        apps on Gyloop marketplace.`}
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6">
                            <Image style={{ width: '100%', height: 'auto' }} src="/img/illustrative-laptop2.png" className="card-image img-fluid" width={0} height={0} sizes='100' alt='gyloop-logo-illustrative'/>
                        </div>

                        <div className="col-12 col-md-6">
                            <ul className="list-unstyled">
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Generating your own revenue, by most interesting market opportunities.
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Make your service help our business community grow
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Best Place to publish your service to be recognized by industries
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Move your business to the wide range of the fastest growth subscriber, and get
                                    insightful feedback to make you serve better
                                </li>
                                <li>
                                    <i className="list-icon fas fa-check-circle text-blue"></i>
                                    Move your business to the wide range of the fastest growth subscriber, and get
                                    insightful feedback to make you serve better
                                </li>
                            </ul>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-xl-center pl-md-3 pl-xl-0">
                                <Link href="/Product/Provider" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Explore More</Link>
                                <a href="live-demo.html?s=gyloop-provider" className="btn btn-primary gyloop-btn">Live Demo</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>

    <div className="footer-bg-cover billing-automation-footer product-footer">
        <div className="container justify-content-md-start">
            <div className="content">

                <h3 className="title">
                    Do you have a question?
                </h3>
                <p className="subtitle">
                    Ask more about our campaign, benefit, methodology, or anything else.
                </p>

                <div className="d-flex justify-content-center justify-content-md-start text-white">
                    <a href="library.html" className="btn btn-warning gyloop-btn mr-2 mr-xl-4">Documentation</a>
                    <Link href="/ContactUs" className="btn btn-warning gyloop-btn">Contact Us</Link>
                </div>

            </div>
        </div>
    </div>

    
    </>
  )
}
