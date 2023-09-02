import CardNewEvent from "../../NewsAndEvent/CardNewEvent";
import CardNewEventB from "../../NewsAndEvent/CardNewEventB";

export default function BlogComponent() {
  return (
    <>
    
    <header className="header-bg-cover billing-automation-header d-flex align-items-end blogs-header">
        <div className="container">
            <h1 className="title">Blogs</h1>
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
                            <input className="form-control" type="text" placeholder="Blogs topic" />
                        </div>

                        <div className="col-12 col-md-3 col-xl-2">
                            <button type="submit" className="btn btn-primary btn-block gyloop-btn">Search Topic</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className="container">

            <div className="category-1">
                <h2 className="category-title">Category 1</h2>

                <div className="pages" id="pages-1">
                    <div className="pages-1"><CardNewEventB /></div>
                    
                </div>

                <nav aria-label="Category 1 Pagination">
                    <ul className="pagination" id="category-1-pagination">
                    </ul>
                </nav>
            </div>

            <hr/>

            <div className="category-2">
                <h2 className="category-title">Category 2</h2>

                <div className="pages">
                    <div className="pages-2"><CardNewEvent /></div>
                </div>

                <nav aria-label="Category 2 Pagination">
                    <ul className="pagination" id="category-2-pagination">
                    </ul>
                </nav>
            </div>

            <hr/>

            <div className="category-3">
                <h2 className="category-title">Popular</h2>

                <div className="pages">
                    <div className="pages-3"><CardNewEvent /></div>
                </div>

                <nav aria-label="Popular Pagination">
                    <ul className="pagination" id="category-3-pagination">
                    </ul>
                </nav>
            </div>

        </div>
    </div>

    </>
  )
}
