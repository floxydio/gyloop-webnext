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

export default function ProviderPricingComponent({
  dataPricing,
}: {
  dataPricing: PricingModel[];
}) {
  return (
    <>
      <div className="business-pricing">
        <div className="container">
          <h3 className="title">Gyloop Provider Pricing</h3>
          <p className="subtitle">
            Perform your business better with affordable subscription costs
          </p>

          <div className="row">
            {dataPricing.map((data) => {
              return (
                <>
                  {data.submit_type === 1 ? (
                    <div className="col-12 col-md-3 px-md-1 px-xl-2">
                      <div className="card border-0 rounded-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-8 col-md-12">
                              <h5 className="card-title">
                                <Image
                                  className="logo-price"
                                  src="/img/icon_bagde_verified.png"
                                  alt="gyloop-icon-badge-verified"
                                  width={0}
                                  height={0}
                                  sizes="100"
                                />
                                <span>{data.pckg_name}</span>
                              </h5>

                              <p className="card-text">{data.pckg_desc}</p>
                            </div>
                            <div className="col-4 col-md-12">
                              <h3 className="price">
                                <sup>{data.defa_curc}</sup>
                                <span>{data.defa_valu}</span>
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
                  ) : (
                    <div className="col-12 col-md-3 px-md-1 px-xl-2">
                      <div className="card border-0 rounded-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-8 col-md-12">
                              <h5 className="card-title">
                                <Image
                                  className="logo-price"
                                  src="/img/icon_bagde_verified.png"
                                  alt="gyloop-icon-badge-verified"
                                  width={0}
                                  height={0}
                                  sizes="100"
                                />
                                <span>{data.pckg_name}</span>
                              </h5>

                              <p className="card-text">{data.pckg_desc}</p>
                            </div>
                            <div className="col-4 col-md-12">
                              <h3 className="price">
                                <sup>{data.defa_curc}</sup>
                                <span>{data.defa_valu}</span>
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
