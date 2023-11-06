import { ProductHeader } from '@/models/product_header';

export default function HeaderCustomerPortal({
  dataHeader,
}: {
  dataHeader: ProductHeader;
}) {
  return (
    <>
      {dataHeader === null || dataHeader === undefined ? (
        <header className="header-bg-cover billing-automation-header d-flex align-items-end customer-portal-header">
          <div className="container">
            <h1 className="title">Customer Portal</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">
                From the outside, many tech start-ups look like they only focus
                on ping pong tables, full-time office chefs and a lot of perks.
                It’s not the case in reality.
              </span>
              <span className="d-none d-md-inline d-xl-none">
                Bring the power of business integration to your business
                community
              </span>
            </p>
            <h5 className="info">
              Working together at the same platform is better.
            </h5>
          </div>
        </header>
      ) : (
        <>
          {dataHeader.type_header === 1 ? (
            <header
              className="header-bg-cover billing-automation-header d-flex align-items-end customer-portal-header"
              style={{
                backgroundImage: `url(${process.env.IMAGE_PRODUCT}${dataHeader.imge_webx})`,
              }}
            >
              <div className="container">
                <h1 className="title"> {dataHeader.head_text}</h1>
                <p className="subtitle">
                  <span className="d-md-none d-xl-inline">
                    {dataHeader.shrt_desc}
                  </span>
                  <span className="d-none d-md-inline d-xl-none">
                    {dataHeader.shrt_desc}
                  </span>
                </p>
                <h5 className="info"> {dataHeader.tagx_text}</h5>
              </div>
            </header>
          ) : (
            <header className="header-bg-cover billing-automation-header d-flex align-items-end customer-portal-header">
              <div className="container">
                <h1 className="title">Customer Portal</h1>
                <p className="subtitle">
                  <span className="d-md-none d-xl-inline">
                    From the outside, many tech start-ups look like they only
                    focus on ping pong tables, full-time office chefs and a lot
                    of perks. It’s not the case in reality.
                  </span>
                  <span className="d-none d-md-inline d-xl-none">
                    Bring the power of business integration to your business
                    community
                  </span>
                </p>
                <h5 className="info">
                  Working together at the same platform is better.
                </h5>
              </div>
            </header>
          )}
        </>
      )}
    </>
  );
}
