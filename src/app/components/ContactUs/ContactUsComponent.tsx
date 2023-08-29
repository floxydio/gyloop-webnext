import '@/style/style.min.css';
import '@/style/icon.css';
import Image from 'next/image';
export default function ContactUsComponent() {
  return (
    <>
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 d-none d-xl-block">
              <div className="position-absolute logo-top">
                <a href="index.html">
                  <Image src="/img/logo-gyloop-dark.png" alt="Logo Gyloop" width={0} height={0} sizes='100'/>
                </a>
              </div>

              <div className="side-info position-relative d-flex w-100 h-100 align-items-end">
                <footer>
                  <p className="text-center">
                    &copy; 2020 Gyloop. All rights reserved.
                  </p>
                </footer>
              </div>
            </div>

            <div className="col-12 col-xl-6 px-xl-0">
              <div className="card border-0 rounded-0">
                <div className="card-body">
                  <h3 className="card-title">TALK WITH THE GYLOOP TEAM</h3>

                  <div className="card-text">
                    <p>
                      Please simply fill out the question form and we will get
                      in touch with you shortly
                    </p>
                  </div>

                  <form
                    className="gyloop-form"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <div className="form-row">
                      <div className="form-group col-12 col-md-6">
                        <label className="label">First Name</label>

                        <input
                          type="text"
                          className="form-control input-label"
                          value="John"
                        />

                        <small className="label-error">Error Message.</small>
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <label className="label">Last Name</label>

                        <input
                          type="text"
                          className="form-control input-label"
                          value="Doe"
                        />

                        <small className="label-error">Error Message.</small>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="label">
                        Company Name
                        <i
                          className="fas fa-question-circle ml-2"
                          data-toggle="tooltip"
                          title="Tooltip Content"
                        ></i>
                      </label>

                      <input
                        type="text"
                        className="form-control input-label"
                        value="Mark Brother Indonesia, PT"
                      />
                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Job Position</label>

                      <div className="gyloop-select">
                        <select className="form-control input-label">
                          <option>Board of Management</option>
                          <option>Chief</option>
                          <option>Executive</option>
                          <option>Employer</option>
                        </select>
                        <i className="select-angle far fa-angle-down"></i>
                      </div>

                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Employee Size</label>

                      <div className="gyloop-select">
                        <select className="form-control input-label">
                          <option>&lt;20 Employees</option>
                          <option>20-50 Employees</option>
                          <option>50-100 Employees</option>
                          <option>100-1000 Employees</option>
                          <option>&gt;1000 Employees</option>
                        </select>
                        <i className="select-angle far fa-angle-down"></i>
                      </div>

                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Country</label>

                      <div className="gyloop-select">
                        <select className="form-control input-label">
                          <option>Indonesia</option>
                          <option>Malaysia</option>
                          <option>Singapore</option>
                          <option>Thailand</option>
                          <option>Vietnam</option>
                        </select>
                        <i className="select-angle far fa-angle-down"></i>
                      </div>

                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Email</label>

                      <input
                        type="email"
                        className="form-control input-label"
                        value="john.doe@markbrother.com"
                      />
                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Mobile Number</label>

                      <div className="form-row">
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control input-label"
                            value="+62"
                          />
                        </div>

                        <div className="col-9">
                          <input
                            type="text"
                            className="form-control input-label"
                          />
                        </div>
                      </div>

                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">
                        Department
                        <i
                          className="fas fa-question-circle ml-2"
                          data-toggle="tooltip"
                          title="Tooltip Content"
                        ></i>
                      </label>

                      <div className="gyloop-select">
                        <select className="form-control input-label">
                          <option>Sales</option>
                          <option>Marketing</option>
                          <option>Human Resource</option>
                          <option>Research and Development</option>
                        </select>
                        <i className="select-angle far fa-angle-down"></i>
                      </div>

                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <label className="label">Subject of Message</label>

                      <input
                        type="text"
                        className="form-control input-label"
                        value="How to get campaign code?"
                      />
                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control input-label"
                        value="Message or comments"
                        rows={3}
                      ></textarea>
                      <small className="label-error">Error Message.</small>
                    </div>

                    <div className="form-group mt-2" id="input-file-container">
                      <div className="d-flex">
                        <label className="label mr-auto" htmlFor="customFile">
                          Attachment File Name
                        </label>
                        <label htmlFor="customFile">
                          <i className="far fa-paperclip icon-attachment"></i>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block gyloop-btn"
                    >
                      Send Message
                    </button>
                    <div>&nbsp;</div>
                  </form>

                  <footer className="d-xl-none">
                    <p className="text-center">
                      &copy; 2020 Gyloop. All rights reserved.
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
