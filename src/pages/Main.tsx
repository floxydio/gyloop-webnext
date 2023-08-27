import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import Header from '../app/components/Header/header';
import Navbar from '@/app/components/Navbar/Navbar';

export default function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}
