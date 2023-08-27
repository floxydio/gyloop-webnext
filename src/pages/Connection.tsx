import HeaderSubmenuComponent from '@/app/components/Header/header-submenu';
import Navbar from '@/app/components/Navbar/Navbar';

export default function Connector() {
  return (
    <>
      <Navbar />
      <HeaderSubmenuComponent
        props={{
          icon: '/img/logo-connector-transparent.png',
          title: 'Gyloop Connector',
          featureTitle1: 'Business Networking',
          featureSubtitle1: 'Leverage Your Sourcing & e-procurement',
          featureTitle2: 'Company Profile',
          featuresSubtitle2: 'Leverage Your Sourcing & e-procurement',
        }}
      />
    </>
  );
}
