import Link from "next/link";
import CardVideo from "./CardVideo";
import CardVideoB from "./CardVideoB";
import Image from "next/image"
export default function SystemDemoComponent() {
    return (
        <>

            <header className="header-bg-cover billing-automation-header d-flex align-items-end live-demo-header">
                <div className="container">
                    <h1 className="title">System Demo</h1>
                    <p className="subtitle news-and-event">
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
            </header>

            <div className="blogs">
                <div className="search-form">
                    <div className="container">
                        <form className="gyloop-form">
                            <div className="form-group row">
                                <div className="col-12 col-md-4 col-xl-3">
                                    <div className="gyloop-select">
                                        <select className="form-control">
                                            <option hidden selected>Browse by category</option>
                                            <option>Category 1</option>
                                            <option>Category 2</option>
                                            <option>Category 3</option>
                                            <option>Category 4</option>
                                            <option>Category 5</option>
                                        </select>
                                        <i className="select-angle far fa-plus-circle"></i>
                                    </div>
                                </div>

                                <div className="col-12 col-md-5 px-md-0 col-xl-7">
                                    <input className="form-control" type="text" placeholder="Search demo" />
                                </div>

                                <div className="col-12 col-md-3 col-xl-2">
                                    <button type="submit" className="btn btn-primary btn-block gyloop-btn">Search Demo</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container" id="gyloop-business">

                    <div className="category-2">
                        <h2 className="category-title">Gyloop Business</h2>

                        <div className="pages" id="pages-2b">
                            <div className="pages-2">
                                <CardVideo />
                            </div>
                      
                            
                        </div>
                        <nav aria-label="Category 2b Pagination">
                            <ul className="pagination" id="category-2b-pagination">
                            </ul>
                        </nav>
                    </div>

                    <hr id="gyloop-networks" />

                    <div className="category-2">
                        <h2 className="category-title">Gyloop Networks</h2>

                        <div className="pages" id="pages-3b">
                            <div className="pages-2">
                                <CardVideo />
                            </div>
                          
                        </div>
                        <nav aria-label="Category 3b Pagination">
                            <ul className="pagination" id="category-3b-pagination">
                            </ul>
                        </nav>
                    </div>

                    <hr id="gyloop-provider" />

                    <div className="category-2">
                        <h2 className="category-title">Gyloop Provider</h2>

                        <div className="pages" id="pages-4b">
                            <div className="pages-2">
                                <CardVideo />
                            </div>
                            <div className="pages-2">
                                <CardVideoB />
                            </div>
                     
                        </div>
                        <nav aria-label="Category 4b Pagination">
                            <ul className="pagination" id="category-4b-pagination">
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>

            <div className="subheader-bg-cover billing-automation-subheader live-demo-subheader">
                <div className="container">
                    <div className="content">

                        <div className="d-md-none">
                            <h2 className="title">
                                Your networks is your assets <br />
                                These assets will help you perform better
                            </h2>
                            <p className="subtitle">
                                Qualified Business Partners
                            </p>
                        </div>

                        <div className="d-none d-md-block">
                            <h2 className="title">
                                Your sales is your customer purchase <br />
                                Your purchase is your supplier sales
                            </h2>
                            <p className="subtitle">
                                Automated and real time
                            </p>
                        </div>

                        <hr className="hr-small" />

                        <h5 className="title-small">
                            Business has been changed
                        </h5>
                        <p className="subtitle-small">
                            You, Customer, and Supplier are working together now
                        </p>

                    </div>
                </div>
            </div>

            <div className="solution about-solution system-demo">

                <div className="container">
                    <div className="text-center">
                        <p className="about-solution-title">Try our live demo systems</p>
                        <p className="about-solution-text">
                            Gyloop focus to solve your challenges and make your business flying higher, we bring your future to
                            you now. Gylopp provides main business transaction solutions which applicable for across industry.
                        </p>
                    </div>

                    <div className="row cards-negative">
                        <div className="col-12 col-md-6 px-md-2 px-xl-3">
                            <div className="card border-0 rounded-0">
                                <Image src="/img/illustrative_laptop2.png" className="features-image img-fluid" alt="ilustrative_laptop" width={0}
                                    height={0}
                                    sizes="100"   style={{ width: '100%', height: 'auto' }} />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        Live Demo
                                    </h5>

                                    <div className="card-text">
                                        <div className="d-none">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships. Business entities are now easy to connect to the unlimited networks across industry and locations.
                                            </p>
                                        </div>
                                        <div className="d-md-block">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <Link href="/LoginDemo" className="btn gyloop-btn btn-primary">Log In</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 px-md-2 px-xl-3">
                            <div className="card border-0 rounded-0">
                                <Image src="/img/illustrative_laptop2.png" className="features-image img-fluid" alt="ilustrative_laptop" width={0}
                                    height={0}
                                    sizes="100"   style={{ width: '100%', height: 'auto' }} />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        Free Trial
                                    </h5>

                                    <div className="card-text">
                                        <div className="d-none">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships. Business entities are now easy to connect to the unlimited networks across industry and locations.
                                            </p>
                                        </div>
                                        <div className="d-md-block">
                                            <p>
                                                Gyloop provide Networks Apps to allow you extend your business connection, cause we understand that business are better built by strong relationships.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <Link href="/Login" className="btn gyloop-btn btn-primary">Log In</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}