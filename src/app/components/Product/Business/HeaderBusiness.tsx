import { ProductHeader } from '@/models/product_header';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function HeaderBusiness({
  dataHeader,
}: {
  dataHeader: ProductHeader;
}) {
  const t = useTranslations('ProductBusinessHeader');

  return (
    <>
      {dataHeader === null || dataHeader === undefined ? <p style={{ textAlign: "center" }}>Data Kosong</p> : <>
        {dataHeader.type_header === 1 ? <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header" style={{
          backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
        }}>
          <div className="container d-flex justify-content-md-end">
            <div className="content px-md-0">
              <Image
                className="logo"
                src="/img/logo-business-transparent.png"
                alt="Logo Gyloop Business"
                width={0}
                height={0}
                sizes="100"
              />
              <h1 className="title">{dataHeader.head_text}</h1>
              <p className="subtitle">
                <span className="d-md-none d-xl-inline">{dataHeader.shrt_desc}</span>
                <span className="d-none d-md-inline d-xl-none">
                  {dataHeader.shrt_desc}
                </span>
              </p>
              <h5 className="info">{dataHeader.tagx_text}</h5>
            </div>
          </div>
        </header> : <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header" style={{
          backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
        }}>
          <div className="container">
            <div className="content px-md-0">
              <Image
                className="logo"
                src="/img/logo-business-transparent.png"
                alt="Logo Gyloop Business"
                width={0}
                height={0}
                sizes="100"
              />
              <h1 className="title">{dataHeader.head_text}</h1>
              <p className="subtitle">
                <span className="d-md-none d-xl-inline">{dataHeader.shrt_desc}</span>
                <span className="d-none d-md-inline d-xl-none">
                  {dataHeader.shrt_desc}
                </span>
              </p>
              <h5 className="info">{dataHeader.tagx_text}</h5>
            </div>
          </div>
        </header>}
      </>}
    </>
  );
}
