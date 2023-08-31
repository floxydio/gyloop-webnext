import Image from 'next/image'
import "@/style/style.min.css"
import "@/style/icon.css"
import Link from 'next/link'
export default function VolunteerComponent() {
  return (
    <>
    
    <div className="login login-demo-user subscribe-verified d-flex justify-content-center">

        <div className="row  w-100">
            <div className="col-12 col-xl-6 px-0">
                <div className="wrapper">

                    <div className="container">

                        <div className="card border-0">
                            <div className="card-body">

                                <Image src="/img/icon_bagde_volunteer.png" className="subscribe-functional-badge img-fluid float-right" alt='icon_badge' width={0} height={0} sizes='100'/>

                                <a href="index.html">
                                    <Image className="logo-gyloop card-title ml-0 mb-xl-3"
                                        src="/img/logo-gyloop-dark.png" alt="Logo Gyloop" width={0} height={0} sizes='100'/>
                                </a>



                                <div className="card-text subscribe-card-text mb-xl-2">
                                    Please complete the form to proceed your registration and enjoy your Gyloop Platform
                                </div>

                                <form className="gyloop-form">
                                    <div className="form-row">
                                        <div className="form-group col-12 col-md-6">
                                            <label className="label">First Name</label>

                                            <input type="text" className="form-control input-label" value="John" />

                                            <small className="label-error">Error Message.</small>
                                        </div>

                                        <div className="form-group col-12 col-md-6">
                                            <label className="label">Last Name</label>

                                            <input type="text" className="form-control input-label" value="Doe"/>

                                            <small className="label-error">Error Message.</small>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="label">
                                            Company Name
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>


                                        <input type="text" className="form-control input-label"
                                            value="Mark Brother Indonesia, PT"/>
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

                                        <input type="email" className="form-control input-label"
                                            value="john.doe@markbrother.com"/>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Mobile Number</label>

                                        <div className="form-row">
                                            <div className="col-3">
                                                <input type="text" className="form-control input-label" value="+62"/>
                                            </div>

                                            <div className="col-9">
                                                <input type="text" className="form-control input-label"/>
                                            </div>

                                        </div>

                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Campaign Code
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>


                                        <input type="text" className="form-control input-label"
                                            value="GIANTCAMPAIGN2020"/ >
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Number of Active Suppliers
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>
                                        <div className="gyloop-select">
                                            <select className="form-control input-label">
                                                <option>&lt; 100 Suppliers</option>
                                                <option>100-200 Suppliers</option>
                                                <option>200-300 Suppliers</option>
                                            </select>
                                            <i className="select-angle far fa-angle-down"></i>
                                        </div>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Number of Active Customers
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>
                                        <div className="gyloop-select">
                                            <select className="form-control input-label">
                                                <option>&lt; 50 Customers</option>
                                                <option>50-100 Customers</option>
                                                <option>100-200 Customers</option>
                                            </select>
                                            <i className="select-angle far fa-angle-down"></i>
                                        </div>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Average Purchase Document per Year
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>
                                        <div className="gyloop-select">
                                            <select className="form-control input-label">
                                                <option>&lt; 10.000 Purchase Orders</option>
                                                <option>10.000-20.000 Purchase Orders</option>
                                                <option>20.000-30.000 Purchase Orders</option>
                                            </select>
                                            <i className="select-angle far fa-angle-down"></i>
                                        </div>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Average Sales Document per Year
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>
                                        <div className="gyloop-select">
                                            <select className="form-control input-label">
                                                <option>&lt; 200 Sales Orders</option>
                                                <option>200-500 Sales Orders</option>
                                                <option>500-1.000 Sales Order</option>
                                            </select>
                                            <i className="select-angle far fa-angle-down"></i>
                                        </div>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">
                                            Reason to Apply
                                            <i className="fas fa-question-circle ml-2" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </label>
                                        <div className="gyloop-select">
                                            <select className="form-control input-label">
                                                <option>I want to replace my existing systems</option>
                                                <option>Reason 2</option>
                                                <option>Reason 3</option>
                                                <option>Reason 4</option>
                                                <option>Reason 5</option>
                                            </select>
                                            <i className="select-angle far fa-angle-down"></i>
                                        </div>
                                        <small className="label-error">Error Message.</small>
                                    </div>

                                    <div className="custom-control custom-checkbox mt-3 mt-md-4 mt-xl-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                                        <label className="custom-control-label" htmlFor="customCheck1">I agree to the<Link href="/SubscriptionAgreement"
                                                className="text-blue ml-1">Subscription Agreement</Link></label>
                                    </div>

                                    <button type="submit" className="btn btn-primary gyloop-btn btn-block">Register</button>

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

            <div className="col-xl-6 d-none d-xl-block side-info subscribe-demo-user subscribe-volunteer-bg px-xl-0 h-100">
                <div className="wrapper2 d-flex align-items-start h-100">

                    <div className="subscribe-demo-user-subheader px-5 py-3 text-white">
                        <div className="row">
                            <div className="col-xl-9">
                                <Image src="/img/icon_bagde_volunteer_white.png" alt="badge" className="subscribe-functional-head-badge img-fluid text-white" width={0} height={0} sizes='100'/>
                                <p className="subscribe-demo-user-title">VOLUNTEER</p>
                                <div className="subscribe-demo-user-subtitle">
                                <p>
    Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships. Business entities are now easy to connect to the unlimited networks across industry and locations.
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

                    </div>
                </div>

                <footer>
                    <p className="text-center text-white mb-0">
                        &copy; 2020 Gyloop. All rights reserved.
                    </p>
                </footer>
            </div>

        </div>


    </div>

    
    </>
  )
}
