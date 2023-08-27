interface PropsSend {
  icon?: string | null;
  backgroundImage?: string | null;
  title: string;
  subtitle?: string | null;
  motto?: string | null;
  featureTitle1: string;
  featureTitle2: string;
  featureTitle3?: string | null;
  featureSubtitle1: string;
  featuresSubtitle2: string;
  featuresSubtitle3?: string | null;
}

export default function HeaderSubmenuComponent({
  props,
}: {
  props: PropsSend;
}) {
  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header connector-header">
        <div className="container d-flex justify-content-md-end">
          <div className="content px-md-0">
            <img
              className="logo"
              src={props.icon}
              alt="Logo Gyloop Connector"
            />
            <h1 className="title">{props.title}</h1>
            <p className="subtitle">
              <span className="d-md-none d-xl-inline">
                From the outside, many tech start-ups look like they only focus
                on ping pong tables, full-time office chefs and a lot of perks.
                It &#39; s not the case in reality.
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
        </div>
      </header>
      <div className="business-subheader-list connector-subheader-list">
        <div className="container">
          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{props.featureTitle1}</div>

              <div className="card-subtitle">{props.featureSubtitle1}</div>

              <i className="fas fa-users text-white mr-1"></i>
              <a
                href="javascript:void(0)"
                className="gyloop-link"
                // onClick="show_tab('#business-collapse-1')"
              >
                Explore more
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="card rounded-0 bg-transparent">
            <div className="card-body">
              <div className="card-title">{props.featureTitle2}</div>

              <div className="card-subtitle">{props.featuresSubtitle2}</div>

              <i className="fas fa-id-card text-white mr-1"></i>
              <a
                href="javascript:void(0)"
                className="gyloop-link"
                // onClick="show_tab('#business-collapse-2')"
              >
                Explore more
                <i className="far fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
