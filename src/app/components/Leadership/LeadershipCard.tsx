import Image from 'next/image';
import Link from 'next/link';

export default function LeadershipCard() {
  return (
    <>
      <div className="card">
        <div className="card-body p-3 p-xl-4">
          <Image
            src="/img/placeholder-square.png"
            className="img-fluid"
            alt="gyloop-placeholder-square"
            width={0}
            height={0}
            sizes="100"
          />

          <h5 className="card-title">John Doe</h5>

          <p className="card-text ">Chief Executive Officer</p>

          <Link href="/Leadership/detail/2" className="card-link text-blue">
            Read more
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
