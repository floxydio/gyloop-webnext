"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from "html-react-parser"
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import "./quillstyle.css"
import baseUrl from '@/Constant/server_config';
interface BlogContent {
  id?: number;
  page_code?: string;
  lang_code?: string;
  thumbnail_img?: string;
  tag?: string;
  title?: string;
  content?: string;
  createdAt?: Date;
}


export default function NewsEventDetailComponent({ id }: { id: number }) {
  const [data, setData] = useState<BlogContent>({})
  const [sideData, setSideData] = useState<BlogContent[]>([])


  async function getBlogByDetail() {
    let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_BLOG_PROD as string)
    await axios.get(`${url}/v1/blog-detail/${id}`).then((res) => {
      if (res.status === 200) {
        setData(res.data.data[0])
      }
    })
  }

  async function getBlog() {
    let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_BLOG_PROD as string)
    await axios.get(`${url}/v1/blog?lang_code=en&page=1&limit=5`).then((res) => {
      if (res.status === 200) {
        setSideData(res.data.data)
      }
    })
  }

  useEffect(() => {
    getBlogByDetail()
    getBlog()
  }, [])

  return (
    <>
      <div className="blogs-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 pr-md-0 pr-xl-4">
              <h5 className="title">
                {data.title}
              </h5>
              <p className="subtitle">Highlight News</p>
              <p className="meta-date">{data.createdAt?.toString().split("T")[0]}</p>

              <div className="social-links">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-blue"
                >
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                  </span>
                </a>

                <a href="mailto:contact@gyloop.com" className="text-blue">
                  <span
                    className="fa-stack"
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
                    <i className="fal fa-circle fa-stack-2x"></i>

                    <i className="fas fa-envelope fa-stack-1x"></i>
                  </span>
                </a>
              </div>

              <div className="card border-0 rounded-0 mt-3">
                <Image
                  src={"http://159.89.44.46:4500/v1/image-blog/" + data.thumbnail_img}
                  className="card-img-top rounded-0"
                  alt="image-placeholder-1"
                  width={0}
                  height={0}
                  // sizes="100"
                  style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: "496", width: "100%" }}
                />

                <div className="card-body">
                  <div className="card-text">
                    <ReactQuill
                      modules={{
                        toolbar: false

                      }}
                      value={data.content as string}
                      readOnly={true} // Read-only mode
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 py-0 my-1 d-md-none">
              <hr className="hr-small bg-dark mx-n2" />
            </div>

            <div className="col-12 col-md-4">

              {sideData.map((item, index) => (
                <>
                  <div className="card card-featured border-0 rounded-0" key={index}>
                    <Image
                      src={"http://159.89.44.46:4500/v1/image-blog/" + item.thumbnail_img}
                      className="card-img-top img-fluid rounded-0"
                      alt="image-placeholder-2"
                      width={0}
                      height={0}
                      sizes="50"
                      style={{ width: '100%', height: 'auto' }}
                    />

                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title}
                      </h5>

                      <div className="card-text d-none d-xl-block">
                        {/* <sergey-import src="lorem/1" /> */}
                      </div>

                      <a
                        href={`/about-newsevent/detail/${item.id}`}
                        className="text-blue d-none d-md-block"
                      >
                        Learn More
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>

                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg-cover billing-automation-footer news-and-event-detail-footer">
        <div className="container">
          <div className="content">
            <h3 className="title">Do you have a question?</h3>
            <p className="subtitle">
              Ask more about Gyloop product, solution, pricing, or anything
              else.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="library.html"
                className="btn btn-primary gyloop-btn mr-2 mr-xl-4"
              >
                Documentation
              </a>
              <a href="contact-us.html" className="btn btn-primary gyloop-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
