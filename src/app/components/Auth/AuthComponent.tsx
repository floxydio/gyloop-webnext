import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/style.min.css"
import "@/style/icon.css"
import React, { useState, useEffect } from "react"
import { useForm, Resolver } from 'react-hook-form';
import Link from "next/link";
import Image from "next/image"
import axios from "axios";
import { useRouter } from "next/router";
interface PropsSend {
    TypeHeader: number
}

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.password
            ? {
                email: {
                    type: 'required',
                    message: 'This is required.',
                },
                password: {
                    type: 'required',
                    message: 'This is required'
                }
            }
            : {},
    };
};
export default function AuthComponent({ props }: { props: PropsSend }) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit((data) => loginRequest(data.email, data.password));
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")

    function triggerPassword() {
        setShowPassword(!showPassword)
    }

    useEffect(() => { 
        if (localStorage.getItem("remember") !== undefined || localStorage.getItem("remember") !== null) {
            

        }
    }, [email])


    async function loginRequest(email: string, password: string) {
        console.log("Triggered Here")
        await axios.post(`http://159.89.44.46:4000/v1/auth/sign-in`, {
            email: email,
            password: password
        }).then((res) => {
            console.log("Res -->", res.data)
            if (res.status === 200 || res.status === 201) {
                router.push("/Main")
                localStorage.setItem("token", res.data.token)
            }

        }).catch((err) => alert(err))
    }


    return (
        <>
            {/* 0 -> Login Demo, 1 -> Login */}
            {props.TypeHeader === 0 ? <div className="login d-flex align-items-center justify-content-center">
                <div className="row align-items-center w-100">
                    <div className="col-12 col-xl-6">
                        <div className="wrapper">
                            <Link href="/">
                                {/* <img className="logo-gyloop demo" src="/img/logo-gyloop-demo.png" alt="Logo Gyloop Demo" /> */}
                                <Image
                                    src="/img/logo-gyloop-demo.png"
                                    alt="Logo Gyloop Demo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="logo-gyloop demo" />
                            </Link>

                            <div className="container">

                                <div className="card border-0">
                                    <div className="card-body">
                                        <form className="gyloop-form" onSubmit={onSubmit}>
                                            <div className="form-group mb-n2">
                                                <label className="input-label-control">Email</label>

                                                <input type="email" className="form-control" {...register("email")} />

                                                <small className="label-error">{errors.email?.message}</small>
                                            </div>

                                            <div className="form-group mb-0">
                                                <label className="input-label-control">Password</label>

                                                <div className="input-group">
                                                    <input type="password" className="form-control border-right-0" {...register("password")} />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-outline-light border-left-0"
                                                        >
                                                            <i className="far fa-eye text-muted"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <small className="label-error">{errors.password?.message}</small>
                                            </div>

                                            <button type="submit" className="btn btn-primary gyloop-btn btn-block">Submit</button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>

                                            <hr />

                                            <Link href="/ResetPassword" className="gyloop-link">Forgot Your Password?</Link>
                                        </form>

                                    </div>
                                </div>

                                <div className="register-demo gyloop-link text-center mt-2">
                                    Do not have a demo user? <Link href="/SubscribeDemo" className="text-blue ml-1">Register
                                        Here</Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block side-info demo px-xl-0">
                        <div className="wrapper2 d-flex align-items-center h-100">

                            <div className="container">
                                <div className="row">

                                    <div className="col-xl-6 text-center">
                                        <Image className="img-badge" src="/img/icon_bagde_professional_white.png" alt="Icon Demo" width={0} height={0} sizes="100" />

                                        <h2 className="title">Register for free trial</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <Link href="/SubscribeProfessional?trial=1" className="btn btn-primary gyloop-btn">
                                                Try for free
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 text-center">
                                        <Image className="img-badge" src="/img/icon_bagde_volunteer_white.png" alt="Icon Volunteer" width={0} height={0} sizes="100" />

                                        <h2 className="title">Volunteer Program</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <Link href="/SubscribeVolunteer" className="btn btn-primary gyloop-btn">
                                                Join Program
                                            </Link>
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
                            <Link href="/">
                                <Image className="logo-gyloop" src="/img/logo-gyloop-dark.png" alt="Logo Gyloop" width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </Link>

                            <div className="container">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <form className="gyloop-form" onSubmit={onSubmit}>
                                            <div className="form-group mb-n2">
                                                <label className="input-label-control">Email</label>

                                                <input type="email" className="form-control"  {...register("email")} />

                                                <small className="label-error">{errors.email?.message}</small>
                                            </div>

                                            <div className="form-group mb-0">
                                                <label className="input-label-control">Password</label>

                                                <div className="input-group">
                                                    <input type={showPassword === true ? "text" : "password"} className="form-control border-right-0"  {...register("password")} />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-outline-light border-left-0"
                                                        >
                                                            <i className="far fa-eye text-muted" onClick={() => triggerPassword()} ></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <small className="label-error">{errors.password?.message}</small>
                                            </div>

                                            <button type="submit" className="btn btn-primary gyloop-btn btn-block">Submit</button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>

                                            <hr />

                                            <Link href="/ResetPassword" className="gyloop-link">Forgot Your Password?</Link>


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
                                        <Image className="img-badge" src="/img/icon_bagde_professional_white.png" alt="Icon Demo" width={0} height={0} sizes="100" />

                                        <h2 className="title">Register for free trial</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <Link href="/SubscribeProfessional?trial=1" className="btn btn-primary gyloop-btn">
                                                Try for free
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 text-center">
                                        <Image width={0} height={0} sizes="100" className="img-badge" src="/img/icon_bagde_volunteer_white.png" alt="Icon Volunteer" />

                                        <h2 className="title">Volunteer Program</h2>
                                        <div className="text">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>

                                        <div className="btn-container d-flex justify-content-center">
                                            <Link href="/SubscribeVolunteer" className="btn btn-primary gyloop-btn">
                                                Join Program
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}

            <footer className="footer-copy footer-login">
                <div className="row align-items-end">

                    <div className="col-12 col-xl-6">
                        <p className="text-center">
                            &copy; 2023 Gyloop. All rights reserved.
                        </p>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block text-center">
                        <Link href="/">
                            <Image width={0} height={0} sizes="100" className="logo-web-lg" src="/img/logo-gyloop-white.png" alt="Logo Gyloop" />
                        </Link>

                        <h5 className="title">MAKE BUSINESS CONNECTED</h5>
                        <p className="text">Working together at the same platform is better.</p>
                    </div>

                </div>
            </footer>

        </>
    )
}   