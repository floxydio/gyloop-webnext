import Image from 'next/image'
import React from 'react'

export default function NetworkHeader() {
  return (
    <>
    <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header networks-header">
        <div className="container d-flex justify-content-md-end">
            <div className="content px-md-0">
                <Image className="logo" src="/img/logo-networks-transparent.png" alt="Logo Gyloop networks" width={0} height={0} sizes='100'/>
                <h1 className="title">Gyloop Networks</h1>
                <p className="subtitle">
                    <span className="d-md-none d-xl-inline">
                        From the outside, many tech start-ups look like they only focus on ping pong tables, full-time
                        office
                        chefs and a lot of perks. It’s not the case in reality.
                    </span>
                    <span className="d-none d-md-inline d-xl-none">
                        Bring the power of business integration to your business community
                    </span>
                </p>
                <h5 className="info">
                    Working together at the same platform is better.
                </h5>
            </div>
        </div>
    </header>

    <div className="business-subheader-list networks-subheader-list">
        <div className="container">
            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Business Networking
                    </div>

                    <div className="card-subtitle">
                        Leverage your sourcing & e-procurement
                    </div>

                    <i className="fas fa-users text-white mr-1"></i>
                    <a href="preventDefault()" className="gyloop-link" >
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Company Profile
                    </div>

                    <div className="card-subtitle">
                        Leverage your sourcing &amp; e-procurement
                    </div>

                    <i className="fas fa-id-card text-white mr-1"></i>
                    <a href="preventDefault()" className="gyloop-link" >
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

        </div>
    </div>
    
    </>
  )
}
