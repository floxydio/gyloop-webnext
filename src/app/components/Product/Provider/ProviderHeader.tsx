import React from 'react'

export default function ProviderHeader() {
  return (

    <>
    
    <header className="header-bg-cover billing-automation-header d-flex align-items-end business-header provider-header">
        <div className="container d-flex justify-content-md-end">
            <div className="content px-md-0">
                <img className="logo" src="/img/logo-provider-transparent.png" alt="Logo Gyloop Provider" />
                <h1 className="title">Gyloop Provider</h1>
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

    <div className="business-subheader-list">
        <div className="container">
            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Customer Relationship Management (CRM)
                    </div>

                    <div className="card-subtitle">
                        Engage your customer and trace the orders
                    </div>

                    <i className="fas fa-heart text-white mr-1"></i>
                    <a href="javascript:void(0)" className="gyloop-link">
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Supplier Relationship Management (SRM)
                    </div>

                    <div className="card-subtitle">
                        Leverage your sourcing &amp; e-procurement
                    </div>

                    <i className="fas fa-shopping-cart text-white mr-1"></i>
                    <a href="javascript:void(0)" className="gyloop-link">
                        Explore more
                        <i className="far fa-chevron-circle-right"></i>
                    </a>

                </div>
            </div>

            <div className="card rounded-0 bg-transparent">
                <div className="card-body">
                    <div className="card-title">
                        Inventory & Warehouse Management (IWM)
                    </div>

                    <div className="card-subtitle">
                        Extend to manage your storable products
                    </div>

                    <i className="fas fa-warehouse text-white mr-1"></i>
                    <a href="javascript:void(0)" className="gyloop-link">
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
