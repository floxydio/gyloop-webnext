import Image from 'next/image';

export default function NewsEventDetailComponent() {
  return (
    <>
      <div className="blogs-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 pr-md-0 pr-xl-4">
              <h5 className="title">
                Gyloop Business New Features Released Q4 2020
              </h5>
              <p className="subtitle">Highlight News</p>
              <p className="meta-date">12 July 2020</p>

              <div className="social-links">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                  </span>
                </a>

                <a href="mailto:contact@gyloop.com" className="text-blue">
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fas fa-envelope fa-stack-1x"></i>
                  </span>
                </a>
              </div>

              <div className="card border-0 rounded-0 mt-3">
                <Image
                  src="/img/image_placeholder.png"
                  className="card-img-top rounded-0"
                  alt="image-placeholder-1"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <div className="card-body">
                  <div className="card-text">
                    {/* <sergey-import src="lorem/5" />
                                <sergey-import src="lorem/5" />
                                <sergey-import src="lorem/2" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 py-0 my-1 d-md-none">
              <hr className="hr-small bg-dark mx-n2" />
            </div>

            <div className="col-12 col-md-4">
              <div className="card card-featured border-0 rounded-0">
                <Image
                  src="/img/image_placeholder.png"
                  className="card-img-top img-fluid rounded-0"
                  alt="image-placeholder-2"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Gyloop Business New Features Released Q4 2020
                  </h5>

                  <div className="card-text d-none d-xl-block">
                    {/* <sergey-import src="lorem/1" /> */}
                  </div>

                  <a
                    href="news-and-event-detail.html"
                    className="text-blue d-none d-md-block"
                  >
                    Learn More
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>

              <div className="card card-featured border-0 rounded-0">
                <Image
                  src="/img/image_placeholder.png"
                  className="card-img-top img-fluid"
                  alt="image-placeholder-3"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Gyloop Business New Features Released Q4 2020
                  </h5>

                  <div className="card-text d-none d-xl-block">
                    {/* <sergey-import src="lorem/1" /> */}
                  </div>

                  <a
                    href="news-and-event-detail.html"
                    className="text-blue d-none d-md-block"
                  >
                    Learn More
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>

              <div className="card card-featured border-0 rounded-0">
                <Image
                  src="/img/image_placeholder.png"
                  className="card-img-top img-fluid rounded-0"
                  alt="image-placeholder-4"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Gyloop Business New Features Released Q4 2020
                  </h5>

                  <div className="card-text d-none d-xl-block">
                    {/* <sergey-import src="lorem/1" /> */}
                  </div>

                  <a
                    href="news-and-event-detail.html"
                    className="text-blue d-none d-md-block"
                  >
                    Learn More
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>

              <div className="card card-featured border-0 rounded-0">
                <Image
                  src="/img/image_placeholder.png"
                  className="card-img-top img-fluid rounded-0"
                  alt="image-placeholder-5"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Gyloop Business New Features Released Q4 2020
                  </h5>

                  <div className="card-text d-none d-xl-block">
                    {/* <sergey-import src="lorem/1" /> */}
                  </div>

                  <a
                    href="news-and-event-detail.html"
                    className="text-blue d-none d-md-block"
                  >
                    Learn More
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer news-and-event-detail-footer">
        <div className="container">
          <div className="content">
            <h3 className="title">Do you have a question?</h3>
            <p className="subtitle">
              Ask more about Gyloop product, solution, pricing, or anything
              else.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="library.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Documentation
              </a>
              <a href="contact-us.html" className="btn btn-primary gyloop-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
