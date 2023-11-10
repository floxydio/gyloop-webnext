import { useTranslations } from 'next-intl';
import CardNewEvent from '../../NewsAndEvent/CardNewEvent';
import CardNewEventB from '../../NewsAndEvent/CardNewEventB';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import baseUrl from '@/Constant/server_config';
export interface BlogContent {
  id?: number;
  page_code?: string;
  lang_code?: string;
  thumbnail_img?: string;
  tag?: string;
  title?: string;
  content?: string;
  createdAt?: Date;
}

export default function LibraryComponent() {
  const t = useTranslations('ResourcesLibraryHeader');
  const [page, setPage] = useState(1)
  const [data, setData] = useState<BlogContent[]>([])
  async function getBlog() {
    let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_LIB_PROD as string)
    await axios.get(`${url}/v1/blog?lang_code=en&page=${page}&limit=5&page_code=library`).then((res) => {
      if (res.status === 200) {
        setData(res.data.data)
      }
    })
  }

  useEffect(() => {
    getBlog()
  }, [page])

  return (
    <>
      <header className="header-bg-cover billing-automation-header d-flex align-items-end library-header">
        <div className="container">
          <h1 className="title">{t('title')}</h1>
          <p className="subtitle news-and-event">
            <span className="d-md-none d-xl-inline">{t('subtitle')}</span>
            <span className="d-none d-md-inline d-xl-none">
              Bring the power of business integration to your business community
            </span>
          </p>
          <h5 className="info">{t('secondSubtitle')}</h5>
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
                      <option hidden selected>
                        Browse by category
                      </option>
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
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search topic"
                  />
                </div>

                <div className="col-12 col-md-3 col-xl-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block gyloop-btn"
                  >
                    Search Topic
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="category-2">
            <h2 className="category-title">Whitepaper</h2>

            <div className="pages" id="pages-3">
              <div className="pages-2">
                {data.map((item, index) => {
                  return <div className="card" key={index}>
                    <Image
                      className="card-img-top"
                      src={"http://159.89.44.46:4500/v1/image-blog/" + item.thumbnail_img}
                      alt="Image Placeholder"
                      width={0}
                      height={0}
                      sizes="100"
                      style={{ width: '100%', height: 'auto' }}
                    />

                    <div className="card-body">
                      <a href={`/about-newsevent/detail/${item.id}`} className="gyloop-link">
                        <h3 className="card-title">
                          {item.title}
                        </h3>
                      </a>
                      <span className="card-category text-warning">Category</span>
                      <div className="card-text" dangerouslySetInnerHTML={{ __html: item.content as string }}>

                      </div>
                      <div className="card-link">
                        <Link href={`/about-newsevent/detail/${item.id}`} className="gyloop-link">
                          Read More
                          <i className="far fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                })}
              </div>

            </div>

            <nav aria-label="Category 3 Pagination">
              <ul className="pagination" id="category-3-pagination"></ul>
            </nav>
          </div>


        </div>
      </div>
    </>
  );
}
