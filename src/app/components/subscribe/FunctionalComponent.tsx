import "bootstrap/dist/css/bootstrap.min.css"
import "../../../style/style.min.css"
import "../../../style/icon.css"
import { useForm, Resolver } from 'react-hook-form';

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
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values,
        errors: !values.subscriptionAgreement
            ? {
                subscriptionAgreement: {
                    type: 'required',
                    message: 'This field is required.',
                }
            }
            : {},
    };
};

export default function FunctionalComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <>

            <div className="login login-demo-user d-flex justify-content-center">
                <div className="row  w-100">
                    <div className="col-12 col-xl-6 px-0">
                        <div className="wrapper">

                            <div className="container">

                                <div className="card border-0">
                                    <div className="card-body">

                                        <img src="/img/icon_bagde_functional.png" className="subscribe-functional-badge img-fluid float-right" />

                                        <a href="index.html">
                                            <img className="logo-gyloop card-title ml-0"
                                                src="/img/logo-gyloop-dark.png" alt="Logo Gyloop" />
                                        </a>



                                        <div className="card-text subscribe-card-text">
                                            Please complete the form to proceed your registration and enjoy your Gyloop Platform
                                        </div>

                                        <form className="gyloop-form" onSubmit={onSubmit}>
                                            <div className="form-row">
                                                <div className="form-group col-12 col-md-6">
                                                    <label className="label">First Name</label>

                                                    <input type="text" className="form-control input-label" {...register("firstName")} />

                                                    <small className="label-error">{errors.firstName?.message}</small>
                                                </div>

                                                <div className="form-group col-12 col-md-6">
                                                    <label className="label">Last Name</label>

                                                    <input type="text" className="form-control input-label" {...register("lastName")} />

                                                    <small className="label-error">{errors.lastName?.message}</small>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="label">
                                                    Company Name
                                                    <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                                </label>


                                                <input type="text" className="form-control input-label"
                                                    {...register("companyName")} />
                                                <small className="label-error">{errors.companyName?.message}</small>
                                            </div>

                                            <div className="form-group">
                                                <label className="label">Job Position</label>

                                                <div className="gyloop-select">
                                                    <select className="form-control input-label"  {...register("jobPosition")}>
                                                        <option>Board of Management</option>
                                                        <option>Chief</option>
                                                        <option>Executive</option>
                                                        <option>Employer</option>
                                                    </select>
                                                    <i className="select-angle far fa-angle-down"></i>
                                                </div>

                                                <small className="label-error">{errors.jobPosition?.message}</small>
                                            </div>

                                            <div className="form-group">
                                                <label className="label">Employee Size</label>

                                                <div className="gyloop-select">
                                                    <select className="form-control input-label" {...register("employeeSize")}>
                                                        <option>&lt;20 Employees</option>
                                                        <option>20-50 Employees</option>
                                                        <option>50-100 Employees</option>
                                                        <option>100-1000 Employees</option>
                                                        <option>&gt;1000 Employees</option>
                                                    </select>
                                                    <i className="select-angle far fa-angle-down"></i>
                                                </div>

                                                <small className="label-error">{errors.employeeSize?.message}</small>
                                            </div>

                                            <div className="form-group">
                                                <label className="label">Country</label>

                                                <div className="gyloop-select">
                                                    <select className="form-control input-label" {...register("country")}>
                                                        <option>Indonesia</option>
                                                        <option>Malaysia</option>
                                                        <option>Singapore</option>
                                                        <option>Thailand</option>
                                                        <option>Vietnam</option>
                                                    </select>
                                                    <i className="select-angle far fa-angle-down"></i>
                                                </div>

                                                <small className="label-error">{errors.country?.message}</small>
                                            </div>

                                            <div className="form-group">
                                                <label className="label">Email</label>

                                                <input type="email" className="form-control input-label"
                                                    {...register("email")} />
                                                <small className="label-error">{errors.email?.message}</small>
                                            </div>

                                            <div className="form-group">
                                                <label className="label">Mobile Number</label>

                                                <div className="form-row">
                                                    <div className="col-3">
                                                        <input type="text" className="form-control input-label" value="+62" />
                                                    </div>

                                                    <div className="col-9">
                                                        <input type="text" className="form-control input-label" {...register("mobileNumber")} />
                                                    </div>

                                                </div>

                                                <small className="label-error">{errors.mobileNumber?.message}</small>
                                            </div>

                                            <div className="custom-control custom-checkbox mt-3 mt-md-4 mt-xl-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" required {...register("subscriptionAgreement")} />
                                                <label className="custom-control-label" htmlFor="customCheck1">I agree to the<a href="subscription-agreement.html"
                                                    className="text-blue ml-1">Subscription Agreement</a></label>
                                            </div>

                                            <button type="submit" className="btn btn-primary gyloop-btn btn-block">Register</button>

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

                    <div className="col-xl-6 d-none d-xl-block side-info subscribe-demo-user subscribe-functional-bg px-xl-0">
                        <div className="wrapper2 d-flex align-items-end h-100">

                            <div className="subscribe-demo-user-subheader px-5 py-3 text-white">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <img src="/img/icon_bagde_functional_white.png" className="subscribe-functional-head-badge img-fluid text-white" />
                                        <p className="subscribe-demo-user-title">FUNCTIONAL</p>
                                        <div className="subscribe-demo-user-subtitle">
                                            Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships. Business entities are now easy to connect to the unlimited networks across industry and locations.

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
    )
}
