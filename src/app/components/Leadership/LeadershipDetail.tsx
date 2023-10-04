import Footer from '../Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import 'popper.js';
import Image from 'next/image';

interface AboutusLeadershipEntities {
  id: number;
  lang_code: string;
  full_name: string;
  jobx_posi: string;
  imge_prof: string;
  long_desc: string;
  is_publ: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function LeadershipDetailComponent({ feature }) {
  console.log(feature);
  return (
    <>
      <div className="leadership-detail">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <div key={feature}>
                  <Image
                    src={process.env.IMAGE_ABOUT + feature.imge_prof}
                    className="img-big d-none d-xl-block"
                    alt="gyloop-placeholder-square"
                    width={100}
                    height={100}
                    sizes="100"
                  />
                  <div className="content flex-grow-1">
                    <div className="row align-items-end">
                      <div className="col-12 col-md-6 d-xl-none">
                        <Image
                          src={process.env.IMAGE_ABOUT + feature.imge_prof}
                          className="img-fluid"
                          alt="gyloop-placeholder-square-1"
                          width={100}
                          height={100}
                          sizes="100"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <h5 className="card-title">{feature.full_name}</h5>
                        <p className="card-text">{feature.jobx_posi}</p>
                      </div>
                    </div>

                    <div className="leadership-detail-content">
                      <p>{feature.long_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
