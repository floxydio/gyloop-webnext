import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export interface AboutCulture {
  id?: number;
  lang_code: string;
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

export interface SolutionFunctionEntities {
  id: number;
  lang_code: string;
  page_code: string;
  func_name: string;
  func_tagx: string;
  desc_lin1: string;
  desc_lin2: string;
  link_list: string;
  imge_func: string;
  submit_type: number;
  createdAt: Date;
  updatedAt: Date;
}

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

export default function CultureComponent({
  dataCulture,
  dataSolutionFunction,
  dataHighlight,
}: {
  dataCulture: AboutCulture[];
  dataSolutionFunction: SolutionFunctionEntities[];
  dataHighlight: AboutHighlight[];
}) {
  const t = useTranslations('AboutUsCultureHeader');

  return (
    <>
      {dataHighlight.map((data) => {
        return (
          <>
            {data.submit_type === 1 ? (
              <div className="about">
                <div className="container">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body">
                      <h3 className="card-title about-card-title">
                        {data.title}
                      </h3>

                      <div className="card-text about-card-text mb-3 mb-md-4">
                        <p>{data.description}</p>
                      </div>

                      <Image
                        src="/img/background_culture_profile_website.png"
                        className="bonafide-image img-fluid d-block mx-auto"
                        alt="gyloop-background-culture-profile-website"
                        width={0}
                        height={0}
                        sizes="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about">
                <div className="container">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body">
                      <h3 className="card-title about-card-title">
                        {data.title}
                      </h3>

                      <div className="card-text about-card-text mb-3 mb-md-4">
                        <p>{data.description}</p>
                      </div>

                      <Image
                        src="/img/background_culture_profile_website.png"
                        className="bonafide-image img-fluid d-block mx-auto"
                        alt="gyloop-background-culture-profile-website"
                        width={0}
                        height={0}
                        sizes="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}

      {dataSolutionFunction.map((data) => {
        return (
          <div key={data.id}>
            {data.submit_type === 1 ? (
              <div
                className="subheader-bg-cover billing-automation-subheader culture-subheader"
                key={data.id}
              >
                <div className="container">
                  <div className="content">
                    <div className="d-md-none">
                      <h2 className="title">{data.func_name}</h2>
                      <p className="subtitle">{data.func_tagx}</p>
                    </div>

                    <div className="d-none d-md-block">
                      <h2 className="title">
                        {data.func_name} <br />
                        {data.func_tagx}
                      </h2>
                      <p className="subtitle">{data.desc_lin1}</p>
                    </div>

                    <hr className="hr-small" />

                    <h5 className="title-small">{data.desc_lin2}</h5>
                    <p className="subtitle-small">{data.link_list}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
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
                          src="/img/illustrative_culture_1.png"
                          className="features-image img-fluid"
                          alt="gyloop-illustrative-culture-1"
                          width={0}
                          height={0}
                          sizes="100"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about-cards">
                <div className="container">
                  <div className="card border-0 rounded-0">
                    <div className="row">
                      <div className="col-12 col-md-6 pr-md-0">
                        <Image
                          src="/img/illustrative_culture_1.png"
                          className="features-image img-fluid"
                          alt="gyloop-illustrative-culture-1"
                          width={0}
                          height={0}
                          sizes="100"
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

      <div className="footer-bg-cover billing-automation-footer culture-footer">
        <div className="container justify-content-md-start">
          <div className="content">
            <h3 className="title">Interest to join with Us?</h3>
            <p className="subtitle">
              Ask more about people, culture, or development program
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="leadership.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Career
              </a>
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
