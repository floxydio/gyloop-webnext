import '@/style/style.min.css';
import '@/style/icon.css';
import Image from 'next/image';
export default function BusinessTabThree() {
    return (
        <>

            <h5 className="link-title">BUSINESS</h5>

            <h3 className="title">Inventory & Warehouse Management (IWM)</h3>

            <p>
                The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
                closer
                relationship. This platform allow you to manage your business transaction and invite your customer to track and
                monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
                elaborate their sourcing or self-service procurement. These platform bring better business integration and
                simplicity between you and your customers regardless of whatever backend system behind.
            </p>
            <p>
                The Gyloop CRM provides an unique platform to organize all business interaction to your customer with very
                closer
                relationship. This platform allow you to manage your business transaction and invite your customer to track and
                monitor the latest update status of their order or deliveries. They can also subscribe your product catalog for
                elaborate their sourcing or self-service procurement. These platform bring better business integration and
                simplicity between you and your customers regardless of whatever backend system behind.
            </p>

            <div className="value-box">
                <h4 className="title d-flex align-items-center">
                    <Image src="/img/icon_idea.png" alt="gyloop-icon-idea" width={0} height={0} sizes='100'/>
                    <span>Value Proposition</span>
                </h4>

                <p>
                    The main difference of Gyloop CRM is how this platform make you connected to your customer, and get
                    connected to prospective customer by Gyloop Network to generate your qualified leads. And make your product
                    easily reacognizable to the targeted market, real time update notification to your customers.
                </p>
            </div>

            <p>
                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are
                better built by strong relationships. Business entities are now easy to connect to the unlimited networks across
                industry and locations, united in the same platform with same understanding.
            </p>

        </>
    )
}
