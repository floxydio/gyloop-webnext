import Footer from "@/app/components/Footer/Footer";
import HeaderProduct from "@/app/components/Header/HeaderProduct";
import Header from "@/app/components/Header/header";
import ProductSlider from "@/app/components/SliderNavbar/ProductSlider";
import Head from "next/head";

export default function Product() {
  return (
        <>
            <Head>
                <title>Gyloop - Product Overview</title>
            </Head>

            <HeaderProduct />
            <ProductSlider />
            <Footer />
            
        </>

    )
}
