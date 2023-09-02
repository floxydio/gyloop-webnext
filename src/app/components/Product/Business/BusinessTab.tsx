import '@/style/style.min.css';
import '@/style/icon.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function BusinessTab() {
  const t = useTranslations('ProductBusinessTabComponent');
  return (
    <>
      <h5 className="link-title">BUSINESS</h5>

      <h3 className="title">{t('firstTitle')}</h3>

      <p>{t('descriptionFeature')}</p>
      <p>
        The Gyloop CRM provides an unique platform to organize all business
        interaction to your customer with very closer relationship. This
        platform allow you to manage your business transaction and invite your
        customer to track and monitor the latest update status of their order or
        deliveries. They can also subscribe your product catalog for elaborate
        their sourcing or self-service procurement. These platform bring better
        business integration and simplicity between you and your customers
        regardless of whatever backend system behind.
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

        <p>{t('valueProposition')}</p>
      </div>

      <p>
        Gyloop provide Networks Apps to allow you extend your business
        connection, cause we understand that business are better built by strong
        relationships. Business entities are now easy to connect to the
        unlimited networks across industry and locations, united in the same
        platform with same understanding.
      </p>
    </>
  );
}
