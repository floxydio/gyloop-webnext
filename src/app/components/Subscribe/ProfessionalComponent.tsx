import 'bootstrap/dist/css/bootstrap.min.css';
import '@/style/style.min.css';
import '@/style/icon.css';
import { useForm, Resolver } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  jobPosition: string;
  employeeSize: string;
  country: string;
  email: string;
  mobileNumber: string;
  subscriptionAgreement: boolean;
  trial: boolean;
};

export interface JobPosition {
  id: number
  name: string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values,
    errors: !values.subscriptionAgreement
      ? {
        subscriptionAgreement: {
          type: 'required',
          message: 'This field is required.',
        },
      }
      : {},
  };
};



export default function ProfessionalComponent({ jobPosition }: { jobPosition: JobPosition[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const [typeSubscriber, setTypeSubscriber] = useState(0)
  const [employeeSize, setEmployeeSize] = useState([
    {
      id: 1,
      name: "<20 Employees"
    },
    {
      id: 2,
      name: "20-50 Employees"
    },
    {
      id: 3,
      name: "50-100 Employees"
    },
    {
      id: 4,
      name: "100-1000 Employees"
    },
    {
      id: 5,
      name: ">1000 Employees"
    }
  ])
  const onSubmit = handleSubmit((data) => createSubscriberProfessional(data));
  async function createSubscriberProfessional(formData: FormValues) {
    try {
      await axios.post("http://159.89.44.46:4000/v1/subscriber/create", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        job_position: 1,
        employee_size: 1,
        country: formData.country,
        email: formData.email,
        mobile_num: formData.mobileNumber,
        mobile_postal_code: 62,
        trial: formData.trial,
        type_subscriber: typeSubscriber,
        details: ""
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
        if (response.status === 200 || response.status === 201) {
          toast.success("Success Create Subscriber")
        }

      }).catch((err) => {
        toast.error("Failed Create Subscriber, " + err.message)
      })
    } catch (err) { }
  }



  return (
    <>
      <ToastContainer />
      <div className="login login-demo-user d-flex justify-content-center">
        <div className="row  w-100">
          <div className="col-12 col-xl-6 px-0">
            <div className="wrapper">
              <div className="container">
                <div className="card border-0">
                  <div className="card-body">
                    <Image
                      src="/img/icon_bagde_professional.png"
                      className="subscribe-functional-badge img-fluid float-right"
                      alt="icon_badge"
                      width={0}
                      height={0}
                      sizes="100"
                    />

                    <Link href="/">
                      <Image
                        className="logo-gyloop card-title ml-0 mb-xl-3"
                        src="/img/logo-gyloop-dark.png"
                        alt="Logo Gyloop"
                        width={0}
                        height={0}
                        sizes="100"
                      // style={{ width: '100%', height: 'auto' }}
                      />
                    </Link>

                    <div className="card-text subscribe-card-text mb-xl-2">
                      Please complete the form to proceed your registration and
                      enjoy your Gyloop Platform
                    </div>

                    <form className="gyloop-form" onSubmit={onSubmit}>
                      <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                          <label className="label">First Name</label>

                          <input
                            type="text"
                            className="form-control input-label"
                            {...register('firstName')}
                          />

                          <small className="label-error">
                            {errors.firstName?.message}
                          </small>
                        </div>

                        <div className="form-group col-12 col-md-6">
                          <label className="label">Last Name</label>

                          <input
                            type="text"
                            className="form-control input-label"
                            {...register('lastName')}
                          />

                          <small className="label-error">
                            {errors.lastName?.message}
                          </small>
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
                          {...register('companyName')}
                        />
                        <small className="label-error">
                          {errors.companyName?.message}
                        </small>
                      </div>

                      <div className="form-group">
                        <label className="label">Job Position</label>

                        <div className="gyloop-select">
                          <select
                            className="form-control input-label"
                            {...register('jobPosition')}
                          >
                            {jobPosition.map((item) => (
                              <option key={item.id}>{item.name}</option>
                            ))}
                          </select>
                          <i className="select-angle far fa-angle-down"></i>
                        </div>

                        <small className="label-error">
                          {errors.jobPosition?.message}
                        </small>
                      </div>

                      <div className="form-group">
                        <label className="label">Employee Size</label>

                        <div className="gyloop-select">
                          <select
                            className="form-control input-label"
                            {...register('employeeSize')}
                          >
                            {employeeSize.map((item) => (
                              <option key={item.id}>{item.name}</option>

                            ))}
                          </select>
                          <i className="select-angle far fa-angle-down"></i>
                        </div>

                        <small className="label-error">
                          {errors.employeeSize?.message}
                        </small>
                      </div>

                      <div className="form-group">
                        <label className="label">Country</label>

                        <div className="gyloop-select">
                          <select
                            className="form-control input-label"
                            {...register('country')}
                          >
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Singapore</option>
                            <option>Thailand</option>
                            <option>Vietnam</option>
                          </select>
                          <i className="select-angle far fa-angle-down"></i>
                        </div>

                        <small className="label-error">
                          {errors.country?.message}
                        </small>
                      </div>

                      <div className="form-group">
                        <label className="label">Email</label>

                        <input
                          type="email"
                          className="form-control input-label"
                          {...register('email')}
                        />
                        <small className="label-error">
                          {errors.email?.message}
                        </small>
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
                              {...register('mobileNumber')}
                            />
                          </div>
                        </div>

                        <small className="label-error">
                          {errors.mobileNumber?.message}
                        </small>
                      </div>

                      <div className="custom-control custom-checkbox mt-3 mt-md-4 mt-xl-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                          required
                          {...register('subscriptionAgreement')}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          I agree to the
                          <Link
                            href="/SubscriptionAgreement"
                            className="text-blue ml-1"
                          >
                            Subscription Agreement
                          </Link>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox my-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="trial"
                          {...register('trial')}
                        />
                        <label className="custom-control-label" htmlFor="trial">
                          Trial 30 Days{' '}
                          <i
                            className="fas fa-question-circle ml-2"
                            data-toggle="tooltip"
                            title="Tooltip Content"
                          ></i>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary gyloop-btn btn-block"
                      >
                        Register
                      </button>
                    </form>

                    <footer className="d-xl-none">
                      <p className="text-center">
                        &copy; 2023 Gyloop. All rights reserved.
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 d-none d-xl-block side-info subscribe-demo-user subscribe-professional-bg px-xl-0">
            <div className="wrapper2 d-flex align-items-end h-100">
              <div className="subscribe-demo-user-subheader px-5 py-3 text-white">
                <div className="row">
                  <div className="col-xl-9">
                    <Image
                      src="/img/icon_bagde_professional_white.png"
                      className="subscribe-functional-head-badge img-fluid text-white"
                      alt="icon_badge"
                      width={0}
                      height={0}
                      sizes="100"
                    />
                    <p className="subscribe-demo-user-title">PROFESSIONAL</p>
                    <div className="subscribe-demo-user-subtitle">
                      <p>
                        Gyloop provide Networks Apps to allow you extend your
                        business connection, cause we understand that business
                        are better built by strong relationships. Business
                        entities are now easy to connect to the unlimited
                        networks across industry and locations.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="subscribe-demo-user-text">
                      <p className="text-blue">FOCUS</p>
                      <p>MAKE</p>
                      <p>BUSINESS</p>
                      <p>CONNECTED</p>
                    </div>
                  </div>
                </div>

                <footer>
                  <p className="text-center text-white mb-0">
                    &copy; 2023 Gyloop. All rights reserved.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const res = await axios.get("http://159.89.44.46:4000/v1/job/job-position")
  const jobPosition = await res.data.data
  if (res.data.data === undefined) {
    return {
      props: {
        jobPosition: []
      }
    }
  }
  return {
    props: {
      jobPosition
    }
  }
}