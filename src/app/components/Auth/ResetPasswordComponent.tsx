import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/style.min.css"
import "@/style/icon.css"
import Link from 'next/link'
import SuccessReseticon from './SuccessReseticon'
import Image from "next/image"

export default function ResetPasswordComponent() {
    const [step, setStep] = useState(0)
    const [enableVerify, setEnableVerify] = useState(false)

    return (
        <>

            <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
                <div className="container align-items-center">

                    <Link className="navbar-brand d-flex mr-5" href="/">
                        <Image className="logo-web-lg" src="/img/logo-gyloop-white.png" alt="Logo GYLOOP"  width={0} height={0} sizes="100" />
                    </Link>
                </div>
            </nav>

            {/* Step 1 */}
            <div id="step-1" className={`wizard ${step === 0 ? '' : 'd-none'}`}>
                <div className="container">
                    <div className="steps">
                        <div className="row indicators align-items-center">
                            <div className="col-6">
                                <hr className="" />
                            </div>
                            <div className="col-6">
                                <hr className="" />
                            </div>
                        </div>

                        <div className="bullets d-flex justify-content-between align-items-start">
                            <div className="step-container success">
                                <div className="step-number">
                                    1
                                </div>
                                <div className="step-info">
                                    Verify Account
                                </div>
                            </div>

                            <div className="step-container">
                                <div className="step-number">
                                    2
                                </div>
                                <div className="step-info">
                                    Verify Recovery Code
                                </div>
                            </div>

                            <div className="step-container">
                                <div className="step-number">
                                    3
                                </div>
                                <div className="step-info">
                                    Reset Password
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0">
                        <div className="card-body">

                            <h1 className="card-title">Verify Account</h1>

                            <p className="card-text">
                                If you forget your password, you need to create a new one. <br />
                                Please input your email to verify your account.
                            </p>

                            <form className="gyloop-form" action="" method="post">

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value="john.doe@markbrother.com" />
                                    <span className="label-error">Error Message</span>
                                </div>


                                <a href="javascript:void(0)" className="next-step text-blue" onClick={() => setStep(1)}>
                                    Continue
                                    <i className="fas fa-angle-right"></i>
                                </a>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
            {/* End Of */}

            {/* Step 2 */}
            <div id="step-2" className={`wizard ${step === 1 ? '' : 'd-none'}`}>
                <div className="container">

                    <div className="steps">

                        <div className="row indicators align-items-center">
                            <div className="col-6">
                                <hr className="active" />
                            </div>
                            <div className="col-6">
                                <hr className="" />
                            </div>
                        </div>

                        <div className="bullets d-flex justify-content-between align-items-start">
                            <div className="step-container success">
                                <div className="step-number">
                                    1
                                </div>
                                <div className="step-info">
                                    Verify Account
                                </div>
                            </div>

                            <div className="step-container active">
                                <div className="step-number">
                                    2
                                </div>
                                <div className="step-info">
                                    Verify Recovery Code
                                </div>
                            </div>

                            <div className="step-container">
                                <div className="step-number">
                                    3
                                </div>
                                <div className="step-info">
                                    Reset Password
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0">
                        <div className="card-body">

                            <h1 className="card-title">Verify the recovery code</h1>

                            <p className="card-text mb-md-5 mb-xl-3 pb-xl-4">
                                A verification code is sent to your mobile phone +628*******221 <br />
                                Enter the 6 digits of verification code to create your new password.
                            </p>

                            <div className="form-group pin-inputs">
                                <div className="form-row">
                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="4" />
                                    </div>

                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="1" />
                                    </div>

                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="1" />
                                    </div>

                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="4" />
                                    </div>

                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="8" />
                                    </div>

                                    <div className="col-2">
                                        <input type="number" min="0" max="9" className="form-control text-center" value="2" />
                                    </div>


                                </div>
                                <small className="label-error multi">Error Message</small>
                            </div>

                            <div className="mt-md-4 pt-md-2 pt-xl-0">
                                <button type="button" className="btn btn-primary btn-sm btn-block gyloop-btn" onClick={() => setEnableVerify(true)}>
                                    Verify Code
                                </button>
                            </div>

                            <p className="card-text text-center mt-3 mt-md-5 mt-xl-4">
                                {`Didn't receive OTP?`}
                                <strong className="ml-2">04:39</strong>

                                <a href="javascript:void(0)" className="text-muted ml-4">
                                    Resend Code
                                    <i className="fas fa-angle-right"></i>
                                </a>
                            </p>


                            <a href="javascript:void(0)" className="prev-step text-blue" onClick={() => setStep(0)}>
                                <i className="fas fa-angle-left"></i>
                                Back
                            </a>

                            <a href="javascript:void(0)" className={`next-step ${enableVerify === false ? 'disabled' : ''}`} onClick={() => {
                                if (enableVerify === true) {
                                    setStep(2)
                                }
                            }}>
                                Continue
                                <i className="fas fa-angle-right"></i>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            {/* End Of */}

            {/* Step 2 When Success */}

            <div id="step-2-success" className={`wizard ${step === 2 ? '' : 'd-none'}`}>
                <div className="container">

                    <div className="steps">

                        <div className="row indicators align-items-center">
                            <div className="col-6">
                                <hr className="success" />
                            </div>
                            <div className="col-6">
                                <hr className="" />
                            </div>
                        </div>

                        <div className="bullets d-flex justify-content-between align-items-start">
                            <div className="step-container success">
                                <div className="step-number">
                                    1
                                </div>
                                <div className="step-info">
                                    Verify Account
                                </div>
                            </div>

                            <div className="step-container success">
                                <div className="step-number">
                                    2
                                </div>
                                <div className="step-info">
                                    Verify Recovery Code
                                </div>
                            </div>

                            <div className="step-container">
                                <div className="step-number">
                                    3
                                </div>
                                <div className="step-info">
                                    Reset Password
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0">
                        <div className="card-body">

                            <h1 className="card-title">Verify the recovery code</h1>

                            <p className="card-text mb-md-5 mb-xl-3">
                                A verification code is sent to your mobile phone +628*******221 <br />
                                Enter the 6 digits of verification code to create your new password.
                            </p>

                            <div className="icon-success-container">
                                <SuccessReseticon />
                            </div>

                            <p className="card-text text-center">
                                Your phone number has been verified, please continue!
                            </p>


                            <a href="javascript:void(0)" className="prev-step text-blue" onClick={() => setStep(2)} >
                                <i className="fas fa-angle-left"></i>
                                Back
                            </a>

                            <a href="javascript:void(0)" className="next-step text-blue" onClick={() => setStep(3)}>
                                Continue
                                <i className="fas fa-angle-right"></i>
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            {/* Step 3  */}

            <div id="step-3" className={`wizard with-info ${step === 3 ? '' : 'd-none'}`}>
                <div className="container">

                    <div className="steps">

                        <div className="row indicators align-items-center">
                            <div className="col-6">
                                <hr className="success" />
                            </div>
                            <div className="col-6">
                                <hr className="active" />
                            </div>
                        </div>

                        <div className="bullets d-flex justify-content-between align-items-start">
                            <div className="step-container success">
                                <div className="step-number">
                                    1
                                </div>
                                <div className="step-info">
                                    Verify Account
                                </div>
                            </div>

                            <div className="step-container success">
                                <div className="step-number">
                                    2
                                </div>
                                <div className="step-info">
                                    Verify Recovery Code
                                </div>
                            </div>

                            <div className="step-container active">
                                <div className="step-number">
                                    3
                                </div>
                                <div className="step-info">
                                    Reset Password
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0">
                        <div className="card-body">

                            <h1 className="card-title">Create your new password</h1>

                            <p className="card-text mb-n1">
                                Type new password for your account
                            </p>

                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <form className="gyloop-form">
                                        <div className="form-group mt-4 mb-n2">
                                            <label className="label-control text-dark-blue">New Password</label>

                                            <div className="input-group">
                                                <input type="password" className="form-control border-right-0" value="12345678" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-light border-left-0" type="button">
                                                        <i className="fas fa-eye text-muted"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <small className="label-error">Error Message</small>
                                        </div>

                                        <div className="form-group mb-0">
                                            <label className="label-control text-dark-blue"> Confirm New Password</label>

                                            <div className="input-group">
                                                <input type="password" className="form-control border-right-0" value="12345678" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-light border-left-0" type="button">
                                                        <i className="fas fa-eye text-muted"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <small className="label-error">Error Message</small>
                                        </div>
                                    </form>

                                </div>

                                <div className="col-12 col-xl-6 pl-xl-0">
                                    <div className="info-box">
                                        <p><i className="fas fa-check text-success mr-2"></i>At least 8 character</p>

                                        <p><i className="fas fa-check text-success mr-2"></i>At least 1 numeric</p>

                                        <p><i className="fas fa-check text-success mr-2"></i>At least 1 capital letter
                                        </p>

                                        <p><i className="fas fa-check text-success mr-2"></i>Confirmation match password</p>

                                        <p><i className="fas fa-check text-danger mr-2"></i>Different with last password</p>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-xl-2 pt-xl-2">
                                <button type="button" className="btn btn-primary btn-sm btn-block gyloop-btn">
                                    Set New Password
                                </button>
                            </div>



                            <a href="javascript:void(0)" className="prev-step text-blue" onClick={() => setStep(2)}>
                                <i className="fas fa-angle-left"></i>
                                Back
                            </a>
                            <a href="javascript:void(0)" className="next-step disabled" onClick={() => setStep(4)}>
                                Continue
                                <i className="fas fa-angle-right"></i>
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            {/* End of */}



            {/* Step 3 - Success */}
            <div id="step-3-success" className={`wizard ${step === 4 ? '' : 'd-none'}`}>
                <div className="container">

                    <div className="steps">

                        <div className="row indicators align-items-center">
                            <div className="col-6">
                                <hr className="success" />
                            </div>
                            <div className="col-6">
                                <hr className=" success" />
                            </div>
                        </div>

                        <div className="bullets d-flex justify-content-between align-items-start">
                            <div className="step-container success">
                                <div className="step-number">
                                    1
                                </div>
                                <div className="step-info">
                                    Verify Account
                                </div>
                            </div>

                            <div className="step-container success">
                                <div className="step-number">
                                    2
                                </div>
                                <div className="step-info">
                                    Verify Recovery Code
                                </div>
                            </div>

                            <div className="step-container success">
                                <div className="step-number">
                                    3
                                </div>
                                <div className="step-info">
                                    Reset Password
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0">
                        <div className="card-body">

                            <h1 className="card-title">Create your new password</h1>

                            <p className="card-text mb-2">
                                Type new password for your account
                            </p>

                            <div className="icon-success-container">
                                <SuccessReseticon />
                            </div>

                            <p className="card-text text-center">
                                Your new password has been set, please Log In.
                            </p>


                            <Link href="/Login" className="btn btn-primary gyloop-btn next-step">
                                Log In
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
