import { useEffect } from "react";
import TableChildrenMD from "./TableChildren/md";
import TableChildrenSM from "./TableChildren/sm";
import Image from "next/image";
import Link from "next/link";
import IconPricing from "@/Constant/icon_pricing";
import { CurrencyConverter } from "@/Constant/currency_converter";

export interface PricingModel {
    id?: number;
    lang_code?: string;
    page_code?: string;
    pckg_name?: string;
    pckg_desc?: string;
    defa_curc?: string;
    defa_valu?: string;
    defa_term?: number;
    altr_curc?: string;
    altr_valu?: number;
    altr_term?: string;
    pckg_icon?: string;
    bt_link?: string;
    bt_capt?: string;
    bt_type?: string;
    is_popu?: boolean;
    is_publ?: boolean;
    submit_type?: number;
    createdAt?: Date;
    updatedAt?: Date;
}


export default function BusinessPricingComponent({ data, dataTablePlan }: { data: PricingModel[], dataTablePlan: PricingModel[] }) {
    return (
        <>
            <div className="business-pricing" id="business-pricing">
                <div className="container">

                    <h3 className="title">Gyloop Business Pricing</h3>
                    <p className="subtitle">
                        Perform your business better with affordable subscription costs
                    </p>

                    <div className="row">
                        {data.map((item, index) => (

                            <>
                                <div className="col-12 col-md-3 px-md-1 px-xl-2">
                                    <div className="card border-0 rounded-0 card-business">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-7 col-md-12">
                                                    {item.is_popu ? <Image src="/img/mark_popular_2.png" className="ribbon-popular d-none d-md-block" alt="gyloop-mark-popular" width={0} height={0} sizes='100' /> : null}

                                                    <h5 className="card-title">
                                                        <IconPricing name={item.pckg_icon as string} />
                                                        <span>
                                                            Professional
                                                        </span>
                                                    </h5>

                                                    <p className="card-text">
                                                        {item.pckg_desc}
                                                    </p>
                                                </div>
                                                <div className="col-5 col-md-12 business-links-toggle">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="price-container">
                                                            <Image src="/img/mark_popular_2.png" className="ribbon-popular d-md-none" alt="gyloop-mark-popular-2" width={0} height={0} sizes='100' />

                                                            <h3 className="price">
                                                                <sup>{CurrencyConverter(item.defa_curc as string)}</sup>
                                                                <span>{item.defa_valu}</span>
                                                            </h3>

                                                            <p className="price-info">
                                                                /user/month <br />
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

                                </div>
                            </>
                        )
                        )}


                    </div>

                </div>
            </div>

            <div className="business-pricing business-pricing-details d-none d-md-block">
                <div className="container">

                    <p className="subtitle">
                        Compare pricing plans and choose what suits you best
                    </p>

                    <div className="card-pricing">
                        <TableChildrenMD data={dataTablePlan} />
                    </div>

                </div>
            </div>

        </>
    )
}
