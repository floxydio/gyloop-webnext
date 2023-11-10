import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AboutusLeadershipEntities {
  id: number;
  lang_code: string;
  full_name: string;
  jobx_posi: string;
  imge_prof: string;
  is_publ: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function LeadershipCard({
  feature,
}: {
  feature: AboutusLeadershipEntities[];
}) {
  const contextLocale = useRouter().locale

  return (
    <>
      <div className="card">
        <div className="card-body p-3 p-xl-4">
          {feature.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={process.env.IMAGE_ABOUT + item.imge_prof}
                  className="img-fluid"
                  alt="gyloop-placeholder-square"
                  width={0}
                  height={0}
                  sizes="100"
                />

                <h5 className="card-title">{item.full_name}</h5>

                <p className="card-text ">{item.jobx_posi}</p>
                <Link
                  href={{
                    pathname: `${contextLocale}/about-leadership/detail/1`,
                  }}
                  className="card-link text-blue"
                >
                  Read More
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
