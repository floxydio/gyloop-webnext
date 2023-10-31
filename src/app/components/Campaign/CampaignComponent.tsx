import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export interface AboutHighlight {
  id?: number;
  lang_code: string;
  page_code: string;
  title: string;
  description: string;
  img: string;
  submit_type?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AboutCampaign {
  id?: number;
  lang_code: string;
  head_text: string;
  slug_text: string;
  long_desc: string;
  desc_posx: string;
  imge_feat: string;
  bt_link: string;
  bt_capt: string;
  bt_type: string;
  submit_type: number;
  is_publ: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AboutCulture {
  id?: number;
  lang_code: string;
  page_code: string;
  head_text: string;
  long_desc: string;
  desc_posx: string;
  imge_feat: string;
  bt_link: string;
  bt_capt: string;
  bt_type: string;
  is_publ: boolean;
  submit_type: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default function CampaignComponent({
  dataHighlight,
  dataCampaign,
  dataCulture,
}: {
  dataHighlight: AboutHighlight[];
  dataCampaign: AboutCampaign[];
  dataCulture: AboutCulture[];
}) {
  const t = useTranslations('AboutUsCampaignHeader');
  return (
    <>
      {dataHighlight.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div className="about" key={data.id}>
                <div className="container">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body">
                      <h3 className="card-title about-card-title">
                        {data.title}
                      </h3>

                      <div className="card-text about-card-text">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about" key={data.id}>
                <div className="container">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body">
                      <h3 className="card-title about-card-title">
                        {data.title}
                      </h3>

                      <div className="card-text about-card-text">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}

      {dataCampaign.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div
                className="footer-bg-cover billing-automation-footer about-subheader campaign-subheader"
                key={data.id}
              >
                <div className="container justify-content-md-start">
                  <div className="content text-white">
                    <h3 className="title">{data.head_text}</h3>
                    <p className="subtitle">
                      <strong>{data.long_desc}</strong>
                    </p>

                    <p className="solution-subheader-text">{data.slug_text}</p>

                    <div className="d-flex justify-content-center justify-content-md-start">
                      <Link
                        href="/SubscribeProfessional?trial=1"
                        className="btn btn-warning gyloop-btn text-white"
                      >
                        {data.bt_capt}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="footer-bg-cover billing-automation-footer about-subheader campaign-subheader"
                key={data.id}
              >
                <div className="container justify-content-md-start">
                  <div className="content text-white">
                    <h3 className="title">{data.head_text}</h3>
                    <p className="subtitle">
                      <strong>{data.long_desc}</strong>
                    </p>

                    <p className="solution-subheader-text">{data.slug_text}</p>

                    <div className="d-flex justify-content-center justify-content-md-start">
                      <Link
                        href="/SubscribeProfessional?trial=1"
                        className="btn btn-warning gyloop-btn text-white"
                      >
                        {data.bt_capt}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}

      {dataCulture.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div className="about-cards" key={data.id}>
                <div className="container">
                  <div className="card border-0 rounded-0">
                    <div className="row">
                      <div className="col-12 col-md-6 pr-md-0">
                        <Image
                          src="/img/illustrative_campaign_1.png"
                          className="features-image img-fluid"
                          alt="gyloop-illustrative-campaign-1"
                          width={0}
                          height={0}
                          sizes="100"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>

                      <div className="col-12 col-md-6 pl-md-0">
                        <div className="card-body">
                          <p className="card-title features-title">
                            {data.head_text}
                          </p>

                          <div className="card-text features-text">
                            <div className="d-md-none">
                              <p>{data.long_desc}</p>
                            </div>
                            <div className="d-none d-md-block">
                              <p>{data.long_desc}</p>
                            </div>
                          </div>

                          <Link
                            href="/About/Campaign/detail/1"
                            className="gyloop-link"
                          >
                            {data.bt_capt}
                            <i className="fas fa-angle-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about-cards" key={data.id}>
                <div className="container">
                  <div className="card border-0 rounded-0">
                    <div className="row">
                      <div className="col-12 col-md-6 pr-md-0">
                        <Image
                          src="/img/illustrative_campaign_1.png"
                          className="features-image img-fluid"
                          alt="gyloop-illustrative-campaign-1"
                          width={0}
                          height={0}
                          sizes="100"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>

                      <div className="col-12 col-md-6 pl-md-0">
                        <div className="card-body">
                          <p className="card-title features-title">
                            {data.head_text}
                          </p>

                          <div className="card-text features-text">
                            <div className="d-md-none">
                              <p>{data.long_desc}</p>
                            </div>
                            <div className="d-none d-md-block">
                              <p>{data.long_desc}</p>
                            </div>
                          </div>

                          <Link
                            href="/About/Campaign/detail/1"
                            className="gyloop-link"
                          >
                            {data.bt_capt}
                            <i className="fas fa-angle-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}

      <div className="footer-bg-cover billing-automation-footer campaign-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Do you have a question?</h3>
            <p className="subtitle">
              Ask more about our campaign, benefit, methodology, or anything
              else.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                href="/SubscribeVolunteer"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Join Campaign
              </Link>
              <Link href="/ContactUs" className="btn btn-primary gyloop-btn ">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
