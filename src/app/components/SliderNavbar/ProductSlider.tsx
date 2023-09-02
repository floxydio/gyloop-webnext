import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/style.min.css"
import "@/style/icon.css"
import Link from "next/link"
import { useTranslations } from "next-intl";

export default function ProductSlider() {
  const t = useTranslations('Index');
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
                <p>{t("title")}</p>

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
                        <Link href="/SubscribeProfessional" className="btn gyloop-btn btn-warning">
                            Get Start for Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    
    )
}

export async function getStaticProps(context) {
    return {
      props: {

        messages: (await import(`@/translate/${context.locale}.json`)).default
      }
    };
  }