
import Footer from "../Footer/Footer";
import '@/style/style.min.css';
import '@/style/icon.css';
import Link from 'next/link';
import "popper.js"
import LeadershipCard from "./LeadershipCard";


export default function LeadershipComponent() {
    return (
      <>
            <div className="container py-5 pb-md-4 mb-md-2 mt-xl-3 mb-xl-4">
          <div className="d-flex justify-content-center ">
              <div className="d-flex row-leadership justify-content-center pt-1">
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
                  <div className="col-leadership">
                      <LeadershipCard />
                  </div>
  
              </div>
          </div>
      </div>
  
      
      </>
    )
  }
  