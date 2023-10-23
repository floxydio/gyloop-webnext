import '@/style/style.min.css';
import '@/style/icon.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
interface ProductDetail {
  id?: number;
  lang_code?: string;
  page_code?: string;
  prod_code?: string;
  tabx_text?: string;
  tabx_icon?: string;
  prod_name?: string;
  prod_clor?: string;
  head_text?: string;
  head_textclor?: string;
  shr1_desc?: string;
  shr1_clor?: string;
  vpro_desc?: string;
  vpro_clor?: string;
  shr2_desc?: string;
  shr2_clor?: string;
  is_publ?: boolean;
  submit_type?: number;
  createdAt?: Date;
  updatedAt?: Date;
}


export default function BusinessTab({ productDetail }: { productDetail: ProductDetail }) {
  const t = useTranslations('ProductBusinessTabComponent');
  return (
    <>
      <h5 className="link-title">BUSINESS</h5>

      <h3 className="title">{productDetail.prod_name}</h3>

      <p>{productDetail.head_text}</p>
      <p>
        {productDetail.shr1_desc}
      </p>

      <div className="value-box">
        <h4 className="title d-flex align-items-center">
          <Image
            src="/img/icon_idea.png"
            alt="gyloop-icon-idea"
            width={0}
            height={0}
            sizes="100"
          />
          <span>Value Proposition</span>
        </h4>

        <p>{productDetail.vpro_desc}</p>
      </div>

      <p>
       {productDetail.shr1_desc}
      </p>
    </>
  );
}
