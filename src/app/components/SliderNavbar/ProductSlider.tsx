import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/style.min.css"
import "@/style/icon.css"

export default function ProductSlider() {
  return (
    <>

<header className="header-bg-cover billing-automation-header d-flex align-items-end about-header product-header">
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-none d-md-block">
                    <div className="solution-header-text">
                        <p className="text-blue">FEEL BETTER</p>
                        <p>MAKE</p>
                        <p>BUSINESS</p>
                        <p>CONNECTED</p>
                    </div>
                </div>

                <div className="col-12 col-md-8">
                    <h1 className="title">Product Overview</h1>
                    <p className="subtitle">
                        The future is now on your hand by digitalization of the end-to-end processes for better selling
                        and buying. Lead the competition by improve the business productivity within solid integration
                        from your customer and suppliers. Explore more about Gyloop products for generating values.
                    </p>

                    <div className="solution-header-text d-md-none">
                        <h5 className="text-blue">FEEL BETTER</h5>
                        <h5>MAKE</h5>
                        <h5>BUSINESS</h5>
                        <h5>CONNECTED</h5>
                    </div>

                    <div className="solution-header-button d-flex justify-content-center justify-content-md-start">
                        <a href="subscribe-professional.html?trial=1" className="btn gyloop-btn btn-warning">
                            Get Start for Free
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    
    )
}
