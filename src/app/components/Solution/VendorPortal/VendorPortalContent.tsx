import Image from 'next/image';

interface SolutionProductEntities {
  id: number;
  lang_code: string;
  head_text: string;
  head_textclr: string;
  tagx_text: string;
  tagx_clor: string;
  long_desc: string;
  long_clor: string;
  ax_link: string;
  ax_capt: string;
  ax_type: string;
  imge_feat: string;
  is_publ: boolean;
  submit_type: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function VendorPortalContent({
  dataSolutionProduct,
}: {
  dataSolutionProduct: SolutionProductEntities[];
}) {
  return (
    <>
      {dataSolutionProduct.map((data) => {
        return (
          <div key={data.id}>
            <div className="billing-automation-content">
              <div className="container">
                <div className="content" key={data.id}>
                  <span className="timeline-bullet d-none d-md-block"></span>

                  <h3 className="title">{data.head_text}</h3>
                  <p className="subtitle">{data.tagx_text}</p>

                  <p>{data.long_desc}</p>
                  <p>{data.long_desc}</p>
                  <p>{data.long_desc}</p>

                  <Image
                    className="img-fluid"
                    src={`${process.env.IMAGE_SOLUTION}${data.imge_feat}`}
                    alt="Image Placeholder"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{ width: '100%', height: 'auto' }}
                  />

                  <p>{data.long_desc}</p>
                  <p>{data.long_desc}</p>
                  <p>{data.long_desc}</p>

                  <a href="product.html" className="text-link">
                    {data.ax_capt}
                    <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="libr/ary.html" className="text-link">
                    Learn The Documentation
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>

                <hr className="hr-small" />

                <div className="content d-none d-md-block mb-0 pb-0">
                  <span className="timeline-bullet d-none d-md-block"></span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
