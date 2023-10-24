import { useEffect } from 'react';
import TableChildrenMD from '../Business/TableChildren/md';
import TableChildrenSM from '../Business/TableChildren/sm';
import Image from 'next/image';
import Link from 'next/link';
import IconPricing from '@/Constant/icon_pricing';
import { CurrencyConverter } from '@/Constant/currency_converter';

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

export default function NetworkPricingComponent({
  dataPricingModel,
}: {
  dataPricingModel: PricingModel[];
}) {
  return (
    <>
      <div className="business-pricing networks-pricing">
        <div className="container">
          <h3 className="title">Gyloop Networks Pricing</h3>
          <p className="subtitle">
            Perform your business better with affordable subscription costs
          </p>

          <div className="row">
            {dataPricingModel.map((data, i) => {
              return (
                <>
                  {data.submit_type === 1 ? (
                    <>
                      <div className="col-12 col-md-3 px-md-1 px-xl-2">
                        <div className="card border-0 rounded-0">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-8 col-md-12">
                                <h5 className="card-title">
                                  <div>
                                    <Image
                                      className="logo-price mr-0"
                                      src="/img/icon_bagde_volunteer.png"
                                      alt="gyloop-icon-badge-volunterr"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                    <Image
                                      className="logo-price mr-0"
                                      src="/img/icon_bagde_functional.png"
                                      alt="gyloop-icon-badge-functional"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                    <Image
                                      className="logo-price"
                                      src="/img/icon_bagde_professional.png"
                                      alt="gyloop-icon-badge-professional"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                  </div>
                                  <span>{data.pckg_name}</span>
                                </h5>

                                <p className="card-text">{data.altr_term}</p>
                              </div>
                              <div className="col-4 col-md-12">
                                <h3 className="price">
                                  <span>{data.defa_curc}</span>
                                </h3>

                                <p className="price-info">{data.defa_term}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <Link
                              href="/SubscribeVerified"
                              className="btn btn-primary btn-block gyloop-btn"
                            >
                              {data.bt_capt}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-9 px-md-1 px-xl-2">
                        <div className="card card-side border-0 rounded-0 h-100">
                          <div className="card-body text-md-left">
                            <div className="row">
                              <div className="col-12 col-md-12">
                                <h5 className="card-title justify-content-md-start text-md-left align-items-md-start">
                                  <span>{data.pckg_name}</span>
                                </h5>

                                <p className="card-text card-text-lg mb-2">
                                  {data.pckg_desc}
                                </p>

                                <hr className="d-none d-md-block" />

                                <p className="card-text mb-2">
                                  Module Includes : Miniweb, Networks
                                </p>
                                <p className="card-text">
                                  *User : Volunteer, Functional, Professional
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <Link
                              href="/SubscribeProfessional"
                              className="btn btn-primary btn-block gyloop-btn"
                            >
                              {data.bt_capt}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-md-3 px-md-1 px-xl-2">
                        <div className="card border-0 rounded-0">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-8 col-md-12">
                                <h5 className="card-title">
                                  <div>
                                    <Image
                                      className="logo-price mr-0"
                                      src="/img/icon_bagde_volunteer.png"
                                      alt="gyloop-icon-badge-volunterr"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                    <Image
                                      className="logo-price mr-0"
                                      src="/img/icon_bagde_functional.png"
                                      alt="gyloop-icon-badge-functional"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                    <Image
                                      className="logo-price"
                                      src="/img/icon_bagde_professional.png"
                                      alt="gyloop-icon-badge-professional"
                                      width={0}
                                      height={0}
                                      sizes="100"
                                    />
                                  </div>
                                  <span>{data.pckg_name}</span>
                                </h5>

                                <p className="card-text">{data.altr_term}</p>
                              </div>
                              <div className="col-4 col-md-12">
                                <h3 className="price">
                                  <span>{data.defa_curc}</span>
                                </h3>

                                <p className="price-info">{data.defa_term}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <Link
                              href="/SubscribeVerified"
                              className="btn btn-primary btn-block gyloop-btn"
                            >
                              {data.bt_capt}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-9 px-md-1 px-xl-2">
                        <div className="card card-side border-0 rounded-0 h-100">
                          <div className="card-body text-md-left">
                            <div className="row">
                              <div className="col-12 col-md-12">
                                <h5 className="card-title justify-content-md-start text-md-left align-items-md-start">
                                  <span>{data.pckg_name}</span>
                                </h5>

                                <p className="card-text card-text-lg mb-2">
                                  {data.pckg_desc}
                                </p>

                                <hr className="d-none d-md-block" />

                                <p className="card-text mb-2">
                                  Module Includes : Miniweb, Networks
                                </p>
                                <p className="card-text">
                                  *User : Volunteer, Functional, Professional
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <Link
                              href="/SubscribeProfessional"
                              className="btn btn-primary btn-block gyloop-btn"
                            >
                              {data.bt_capt}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
