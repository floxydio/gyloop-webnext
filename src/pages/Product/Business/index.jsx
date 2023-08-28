import Footer from '@/app/components/Footer/Footer';
import HeaderSubmenuComponent from '@/app/components/Header/header-submenu';
import '@/style/style.min.css';
import '@/style/icon.css';
import { useState } from 'react';

export default function Businnes() {
  return (
    <>
      <HeaderSubmenuComponent
        props={{
          icon: '/img/logo-business-transparent.png',
          title: 'Gyloop Business',
          featureTitle1: 'Business Networking',
          featureSubtitle1: 'Leverage Your Sourcing & e-procurement',
          featureTitle2: 'Company Profile',
          featuresSubtitle2: 'Leverage Your Sourcing & e-procurement',
        }}
      />
      <></>
            <div className="business-subheader-list">
        <div className="container">
            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Customer Relationship Management (CRM)
                    </div>

                    <div className="card-subtitle">
                        Engage your customer and trace the orders
                    </div>

                    <i className="fas fa-heart text-white mr-1"></i>
                    <a href="javascript:void()" className="gyloop-link" onclick="show_tab('#crm')">
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Supplier Relationship Management (SRM)
                    </div>

                    <div className="card-subtitle">
                        Leverage your sourcing &amp; e-procurement
                    </div>

                    <i className="fas fa-shopping-cart text-white mr-1"></i>
                    <a href="javascript:void()" className="gyloop-link" onclick="show_tab('#srm')">
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Inventory &amp; Warehouse Management (IWM)
                    </div>

                    <div className="card-subtitle">
                        Extend to manage your storable products
                    </div>

                    <i className="fas fa-warehouse text-white mr-1"></i>
                    <a href="javascript:void()" className="gyloop-link" onclick="show_tab('#iwm')">
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

        </div>
    </div>

    <div className="billing-automation-swiper business">
        <div className="container">

            <h2 className="title">How Gyloop Works</h2>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators bullets">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="subheader-bg-cover billing-automation-subheader business-subheader">
        <div className="container justify-content-md-start">
            <div className="content">

                <h2 className="title">
                    Your sales is your customer purchase <br />
                    Your purchase is your supplier sales
                </h2>
                <p className="subtitle">
                    Automated and real time
                </p>

                <hr className="hr-small" />

                <h5 className="title-small">
                    Business has been changed
                </h5>
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
                    <a className="nav-link" href="#crm" data-toggle="collapse" aria-expanded="true">
                        <i className="fas fa-heart mr-2"></i>
                        CRM Module
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#srm" data-toggle="collapse">
                        <i className="fas fa-shopping-cart mr-2"></i>
                        SRM Module
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#iwm" data-toggle="collapse">
                        <i className="fas fa-warehouse mr-2"></i>
                        IWM Module
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="business-tabs" id="business-accordion">
        <div className="container">

            <div>
                <h4 className="footer-links-toggle d-flex align-items-center d-xl-none" data-toggle="collapse"
                    data-target="#crm" aria-expanded="true">
                    <i className="fas fa-heart"></i>
                    <span className="ml-2 mr-auto">CRM Module</span>

                    <i className="fas fa-angle-down icon-rotates"></i>
                </h4>
                <div id="crm" className="collapse show" data-parent="#business-accordion">
                    <div className="tab">
                        {/* <!-- <img className="img-title" src="img/Feature Business+.png" alt="Feature Business"> --> */}
<h5 className="link-title">BUSINESS</h5>

<h3 className="title">Customer Relationship Management (CRM)</h3>

<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>
<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>

<div className="value-box">
    <h4 className="title d-flex align-items-center">
        {/* <!-- <i className="fad fa-lightbulb-on text-warning mr-1 mr-xl-3"></i> --> */}
        <img src="img/icon_idea.png" alt="" />
        <span>Value Proposition</span>
    </h4>

    <p>
        The main difference of Gyloop CRM is how this platform make you connected to your customer, and get
        connected to prospective customer by Gyloop Network to generate your qualified leads. And make your product
        easily reacognizable to the targeted market, real time update notification to your customers.
    </p>
</div>

<p>
    Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
    better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
    industry and locations, united in the same platform with same understanding.
</p>

                        <div className="billing-automation-swiper">
                            <div className="container">

                                <h2 className="title">Highlight Menu</h2>

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators bullets">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
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

                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>

                        <div className="footer-bg-cover billing-automation-footer business-search-footer">
    <div className="container">
        <div className="content">

            <h3 className="title">
                And many more
            </h3>
            <p className="subtitle">
                Explore business feature here
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
                <a href="library.html" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Documentation</a>
                <a href="live-demo.html" className="btn btn-primary gyloop-btn">System Demo</a>
            </div>

        </div>
    </div>
</div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="footer-links-toggle d-flex align-items-center d-xl-none" data-toggle="collapse"
                    data-target="#srm">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="ml-2 mr-auto">SRM Module</span>

                    <i className="fas fa-angle-down icon-rotates"></i>
                </h4>
                <div id="srm" className="collapse" data-parent="#business-accordion">
                    <div className="tab">
                        {/* <!-- <img className="img-title" src="img/Feature Business+.png" alt="Feature Business"> --> */}
<h5 className="link-title">BUSINESS</h5>

<h3 className="title">Supplier Relationship Management (SRM)</h3>

<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>
<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>

<div className="value-box">
    <h4 className="title d-flex align-items-center">
        {/* <!-- <i className="fad fa-lightbulb-on text-warning mr-1 mr-xl-3"></i> --> */}
        <img src="img/icon_idea.png" alt="" />
        <span>Value Proposition</span>
    </h4>

    <p>
        The main difference of Gyloop CRM is how this platform make you connected to your customer, and get
        connected to prospective customer by Gyloop Network to generate your qualified leads. And make your product
        easily reacognizable to the targeted market, real time update notification to your customers.
    </p>
</div>

<p>
    Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
    better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
    industry and locations, united in the same platform with same understanding.
</p>

                        <div className="billing-automation-swiper">
                            <div className="container">

                                <h2 className="title">Highlight Menu</h2>

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators bullets">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
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

                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists" />
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>

                        <div className="footer-bg-cover billing-automation-footer business-search-footer">
    <div className="container">
        <div className="content">

            <h3 className="title">
                And many more
            </h3>
            <p className="subtitle">
                Explore business feature here
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
                <a href="library.html" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Documentation</a>
                <a href="live-demo.html" className="btn btn-primary gyloop-btn">System Demo</a>
            </div>

        </div>
    </div>
</div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="footer-links-toggle d-flex align-items-center d-xl-none" data-toggle="collapse"
                    data-target="#iwm">
                    <i className="fas fa-warehouse"></i>
                    <span className="ml-2 mr-auto">IWM Module</span>

                    <i className="fas fa-angle-down icon-rotates"></i>
                </h4>
                <div id="iwm" className="collapse" data-parent="#business-accordion">
                    <div className="tab">
                        {/* <!-- <img className="img-title" src="img/Feature Business+.png" alt="Feature Business"> --> */}
<h5 className="link-title">BUSINESS</h5>

<h3 className="title">Inventory & Warehouse Management (IWM)</h3>

<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>
<p>
    The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
    closer
    relationship. This platform allow you to manage your business transaction and invite your customer to track and
    monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
    elaborate their sourcing or self-service procurement. These platform bring better business integration and
    simplicity between you and your customers regardless of whatever backend system behind.
</p>

<div className="value-box">
    <h4 className="title d-flex align-items-center">
        {/* <!-- <i className="fad fa-lightbulb-on text-warning mr-1 mr-xl-3"></i> --> */}
        <img src="img/icon_idea.png" alt="" />
        <span>Value Proposition</span>
    </h4>

    <p>
        The main difference of Gyloop CRM is how this platform make you connected to your customer, and get
        connected to prospective customer by Gyloop Network to generate your qualified leads. And make your product
        easily reacognizable to the targeted market, real time update notification to your customers.
    </p>
</div>

<p>
    Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
    better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
    industry and locations, united in the same platform with same understanding.
</p>

                        <div className="billing-automation-swiper">
                            <div className="container">

                                <h2 className="title">Highlight Menu</h2>

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators bullets">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid" src="img/video_player_placeholder.gif" alt="Video Placeholder" />
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

                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists" />
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>
                        <div className="product-management">
    <div className="row">
        <div className="col-12 col-xl-8">
            <h4 className="title">Product Management</h4>
        
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations.
            </p>
        
            <a href="live-demo.html" className="gyloop-link d-block">
                Watch Video
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="library.html" className="gyloop-link d-block">
                Find Documentation
                <i className="fas fa-angle-right"></i>
            </a>
        </div>
    
        <div className="col-12 d-xl-none">
            <hr className="hr-small bg-blue" />
        </div>
    
        <div className="col-12 col-xl-4 col-lists">
            <ul className="list-unstyled">
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Remove your limitation to build the best fit IT solution for your company by best practice of Gyloop
                    interfaces
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Manage faster development to connect any systems, whether in the cloud or on-premises, on a unified platform
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
                <li>
                    <i className="list-icon fas fa-check-circle text-blue"></i>
                    Extend your capabilities to improve your service to your business partners
                </li>
            </ul>
        </div>
    </div>
</div>

                        <div className="footer-bg-cover billing-automation-footer business-search-footer">
    <div className="container">
        <div className="content">

            <h3 className="title">
                And many more
            </h3>
            <p className="subtitle">
                Explore business feature here
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
                <a href="library.html" className="btn btn-primary gyloop-btn mr-2 mr-xl-4">Documentation</a>
                <a href="live-demo.html" className="btn btn-primary gyloop-btn">System Demo</a>
            </div>

        </div>
    </div>
</div>
</div>
</div>
</div>
      <Footer />
    </>
  );
}
