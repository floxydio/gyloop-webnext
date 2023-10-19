import { ProductHeader } from '@/models/product_header';

export default function HeaderBillingAutomation({
  dataHeader,
}: {
  dataHeader: ProductHeader;
}) {
  return (
    <>
      {dataHeader.type_header === 1 ? (
        <header
          className="header-bg-cover billing-automation-header d-flex align-items-end"
          style={{
            backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
          }}
        >
          <div className="container">
            <h1 className="title">{dataHeader.head_text}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">
                {dataHeader.shrt_desc}
              </span>
              <span className="d-none d-md-inline d-xl-none">
                {dataHeader.shrt_desc}
              </span>
            </p>
            <h5 className="info">{dataHeader.tagx_text}</h5>
          </div>
        </header>
      ) : (
        <header
          className="header-bg-cover billing-automation-header d-flex align-items-end"
          style={{
            backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
          }}
        >
          <div className="container">
            <h1 className="title">{dataHeader.head_text}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">
                {dataHeader.shrt_desc}
              </span>
              <span className="d-none d-md-inline d-xl-none">
                {dataHeader.shrt_desc}
              </span>
            </p>
            <h5 className="info">{dataHeader.tagx_text}</h5>
          </div>
        </header>
      )}
    </>
  );
}
