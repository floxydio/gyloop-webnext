import "bootstrap/dist/css/bootstrap.min.css"
import "../../../style/style.css"
interface PropsSend {
    TypeHeader: number
}

export default function Auth({ props }: { props: PropsSend }) {
    return (
        <>

            {props.TypeHeader === 0 ? <div className="login d-flex align-items-center justify-content-center">

                <div className="row align-items-center w-100">
                    <div className="col-12 col-xl-6">
                        <div className="wrapper">
                            <a href="index.html">
                                <img className="logo-gyloop" src="/img/logo-gyloop-dark.png" alt="Logo Gyloop" />
                            </a>

                            <div className="container">

                                <div className="card border-0">
                                    <div className="card-body">
                                        <form className="gyloop-form">
                                            <div className="form-group mb-n2">
                                                <label className="input-label-control">Email</label>

                                                <input type="email" className="form-control" value="john.doe@markbrother.com" />

                                                <small className="label-error">Error Message</small>
                                            </div>

                                            <div className="form-group mb-0">
                                                <label className="input-label-control">Password</label>

                                                <div className="input-group">
                                                    <input type="password" className="form-control border-right-0"
                                                        value="1234567890" />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-outline-light border-left-0"
                                                        >
                                                            <i className="far fa-eye text-muted"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <small className="label-error">Error Message</small>
                                            </div>

                                            <button type="submit" className="btn btn-primary gyloop-btn btn-block">Submit</button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>

                                            <hr />

                                            <a href="reset-password-wizard.html" className="gyloop-link">Forgot Your Password?</a>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block side-info px-xl-0">
                        <div className="wrapper2 d-flex align-items-center h-100">

                            <div className="container">
                                <div className="row">

                                    <div className="col-xl-6 text-center">
                                        <img className="img-badge" src="/img/icon_bagde_professional_white.png" alt="Icon Demo" />

                                        <h2 className="title">Register for free trial</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <a href="subscribe-professional.html?trial=1" className="btn btn-primary gyloop-btn">
                                                Try for free
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 text-center">
                                        <img className="img-badge" src="/img/icon_bagde_volunteer_white.png" alt="Icon Volunteer" />

                                        <h2 className="title">Volunteer Program</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <a href="subscribe-volunteer.html" className="btn btn-primary gyloop-btn">
                                                Join Program
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> : <div className="login d-flex align-items-center justify-content-center">

                <div className="row align-items-center w-100">
                    <div className="col-12 col-xl-6">
                        <div className="wrapper">
                            <a href="index.html">
                                <img className="logo-gyloop" src="/img/logo-gyloop-demo.png" alt="Logo Gyloop" />
                            </a>

                            <div className="container">

                                <div className="card border-0">
                                    <div className="card-body">
                                        <form className="gyloop-form">
                                            <div className="form-group mb-n2">
                                                <label className="input-label-control">Email</label>

                                                <input type="email" className="form-control" value="john.doe@markbrother.com" />

                                                <small className="label-error">Error Message</small>
                                            </div>

                                            <div className="form-group mb-0">
                                                <label className="input-label-control">Password</label>

                                                <div className="input-group">
                                                    <input type="password" className="form-control border-right-0"
                                                        value="1234567890" />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-outline-light border-left-0"
                                                        >
                                                            <i className="far fa-eye text-muted"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <small className="label-error">Error Message</small>
                                            </div>

                                            <button type="submit" className="btn btn-primary gyloop-btn btn-block">Submit</button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>

                                            <hr />

                                            <a href="reset-password-wizard.html" className="gyloop-link">Forgot Your Password?</a>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block side-info px-xl-0">
                        <div className="wrapper2 d-flex align-items-center h-100">

                            <div className="container">
                                <div className="row">

                                    <div className="col-xl-6 text-center">
                                        <img className="img-badge" src="/img/icon_bagde_professional_white.png" alt="Icon Demo" />

                                        <h2 className="title">Register for free trial</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <a href="subscribe-professional.html?trial=1" className="btn btn-primary gyloop-btn">
                                                Try for free
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 text-center">
                                        <img className="img-badge" src="/img/icon_bagde_volunteer_white.png" alt="Icon Volunteer" />

                                        <h2 className="title">Volunteer Program</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <a href="subscribe-volunteer.html" className="btn btn-primary gyloop-btn">
                                                Join Program
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}

        </>
    )
}
