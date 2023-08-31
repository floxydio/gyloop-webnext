import { useEffect } from "react";
import TableChildrenMD from "./TableChildren/md";
import TableChildrenSM from "./TableChildren/sm";
import Image from "next/image";
import Link from "next/link";
export default function BusinessPricingComponent() {


  return (
    <>
    
        
    <div className="business-pricing" id="business-pricing">
        <div className="container">

            <h3 className="title">Gyloop Business Pricing</h3>
            <p className="subtitle">
                Perform your business better with affordable subscription costs
            </p>

            <div className="row">

                <div className="col-12 col-md-3 px-md-1 px-xl-2">
                    <div className="card border-0 rounded-0 card-business">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7 col-md-12">
                                    <h5 className="card-title">
                                        <Image className="logo-price" src="/img/icon_bagde_verified.png" alt="image-icon-badge-verified" width={0} height={0} sizes='100' />
                                        <span>
                                            Verified
                                        </span>
                                    </h5>

                                    <p className="card-text">
                                        Essential modules for referral user from existing company
                                    </p>
                                </div>
                                <div className="col-5 col-md-12 business-links-toggle">
                                    <div className="d-flex justify-content-between">
                                        <div className="price-container">
                                            <h3 className="price">
                                                <span>FREE</span>
                                            </h3>

                                            <p className="price-info">
                                                /user/month <br/>
                                                (billed annually)
                                            </p>
                                        </div>

                                        <div className="footer-links-toggle d-flex align-items-center justify-content-center d-md-none"
                                            data-toggle="collapse" data-target="#business-table-sm-1"
                                            aria-expanded="true">
                                            <i className="fas fa-angle-down icon-rotates"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer d-none d-md-block">
                            <Link href="/SubscribeVerified" className="btn btn-primary btn-block gyloop-btn">
                                Register Now
                            </Link>
                        </div>
                    </div>

                    <div className="collapse show d-md-none" id="business-table-sm-1" data-parent="#business-pricing">
                        <div className="card border-0 rounded-0 card-pricing">
                            <div className="card-body">
                                <TableChildrenSM />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 px-md-1 px-xl-2">
                    <div className="card border-0 rounded-0 card-business">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7 col-md-12">
                                    <h5 className="card-title"> 
                                        <Image className="logo-price" src="/img/icon_bagde_volunteer.png" alt="image-icon-badge-volunteer" width={0} height={0} sizes='100'/>
                                        <span>
                                            Volunteer
                                        </span>
                                    </h5>

                                    <p className="card-text">
                                        Promotional volunteer user with professional level access
                                    </p>
                                </div>
                                <div className="col-5 col-md-12 business-links-toggle">
                                    <div className="d-flex justify-content-between">
                                        <div className="price-container">
                                            <h3 className="price">
                                                <span>FREE</span>
                                            </h3>

                                            <p className="price-info">
                                                /user/month <br/>
                                                (billed annually)
                                            </p>
                                        </div>

                                        <div className="footer-links-toggle d-flex align-items-center justify-content-center d-md-none"
                                            data-toggle="collapse" data-target="#business-table-sm-2">
                                            <i className="fas fa-angle-down icon-rotates"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer d-none d-md-block">
                            <Link href="/SubscribeVolunteer" className="btn btn-primary btn-block gyloop-btn">
                                Register Now
                            </Link>
                        </div>
                    </div>

                    <div className="collapse d-md-none" id="business-table-sm-2" data-parent="#business-pricing">
                        <div className="card border-0 rounded-0 card-pricing">
                            <div className="card-body">
                                <TableChildrenSM />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 px-md-1 px-xl-2">
                    <div className="card border-0 rounded-0 card-business">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7 col-md-12">
                                    <h5 className="card-title">
                                        <Image className="logo-price" src="/img/icon_bagde_functional.png" alt="gyloop-icon-badge-functional" width={0} height={0} sizes='100'/>
                                        <span>
                                            Functional
                                        </span>
                                    </h5>

                                    <p className="card-text">
                                        Complete application modules for any size of company
                                    </p>
                                </div>
                                <div className="col-5 col-md-12 business-links-toggle">
                                    <div className="d-flex justify-content-between">
                                        <div className="price-container">
                                            <h3 className="price">
                                                <sup>&dollar;</sup>
                                                <span>10</span>
                                            </h3>

                                            <p className="price-info">
                                                /user/month <br/>
                                                (billed annually)
                                            </p>
                                        </div>

                                        <div className="footer-links-toggle d-flex align-items-center justify-content-center d-md-none"
                                            data-toggle="collapse" data-target="#business-table-sm-3">
                                            <i className="fas fa-angle-down icon-rotates"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer d-none d-md-block">
                            <Link href="/SubscribeFunctional" className="btn btn-primary btn-block gyloop-btn">
                                Register Now
                            </Link>
                        </div>
                    </div>

                    <div className="collapse d-md-none" id="business-table-sm-3" data-parent="#business-pricing">
                        <div className="card border-0 rounded-0 card-pricing">
                            <div className="card-body">
                                <TableChildrenSM />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 px-md-1 px-xl-2">
                    <div className="card border-0 rounded-0 card-business">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7 col-md-12">
                                    <Image src="/img/mark_popular_2.png" className="ribbon-popular d-none d-md-block" alt="gyloop-mark-popular" width={0} height={0} sizes='100'/>

                                    <h5 className="card-title">
                                        <Image className="logo-price" src="/img/icon_bagde_professional.png" alt="gyloop-logo-price" width={0} height={0} sizes='100'/>
                                        <span>
                                            Professional
                                        </span>
                                    </h5>

                                    <p className="card-text">
                                        Advance application modules for your business
                                    </p>
                                </div>
                                <div className="col-5 col-md-12 business-links-toggle">
                                    <div className="d-flex justify-content-between">
                                        <div className="price-container">
                                            <Image src="/img/mark_popular_2.png" className="ribbon-popular d-md-none" alt="gyloop-mark-popular-2" width={0} height={0} sizes='100'/>

                                            <h3 className="price">
                                                <sup>&dollar;</sup>
                                                <span>15</span>
                                            </h3>

                                            <p className="price-info">
                                                /user/month <br/>
                                                (billed annually)
                                            </p>
                                        </div>

                                        <div className="footer-links-toggle d-flex align-items-center justify-content-center d-md-none"
                                            data-toggle="collapse" data-target="#business-table-sm-4">
                                            <i className="fas fa-angle-down icon-rotates"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer d-none d-md-block">
                            <Link href="/SubscribeProfessional?trial=1" className="btn btn-primary btn-block gyloop-btn">
                                Try for Free
                            </Link>
                        </div>
                    </div>

                    <div className="collapse d-md-none" id="business-table-sm-4" data-parent="#business-pricing">
                        <div className="card border-0 rounded-0 card-pricing">
                            <div className="card-body">
                                <TableChildrenSM />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="business-pricing business-pricing-details d-none d-md-block">
        <div className="container">

            <p className="subtitle">
                Compare pricing plans and choose what suits you best
            </p>

            <div className="card-pricing">
                <TableChildrenMD />
            </div>

        </div>
    </div>

    </>
  )
}
