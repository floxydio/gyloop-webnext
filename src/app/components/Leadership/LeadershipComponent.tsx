import Footer from '../Footer/Footer';
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import 'popper.js';
import LeadershipCard from './LeadershipCard';

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

export default function LeadershipComponent({
  feature,
}: {
  feature: AboutusLeadershipEntities[];
}) {
  return (
    <>
      <div className="container py-5 pb-md-4 mb-md-2 mt-xl-3 mb-xl-4">
        <div className="d-flex justify-content-center ">
          <div className="d-flex row-leadership justify-content-center pt-1">
            <div className="col-leadership">
              <LeadershipCard feature={feature} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
