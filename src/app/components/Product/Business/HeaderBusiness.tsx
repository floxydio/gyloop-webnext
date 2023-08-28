import React from 'react'

export default function HeaderBusiness() {
  return (
    <>
    
    <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header">
        <div className="container d-flex justify-content-md-end">
            <div className="content px-md-0">
                <img className="logo" src="/img/logo-business-transparent.png" alt="Logo Gyloop Business" />
                <h1 className="title">Gyloop Business</h1>
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
    
    </>
  )
}
