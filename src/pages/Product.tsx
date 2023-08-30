import Footer from "@/app/components/Footer/Footer";
import HeaderProduct from "@/app/components/Header/HeaderProduct";
import Header from "@/app/components/Header/header";
import ProductSlider from "@/app/components/SliderNavbar/ProductSlider";
import Head from "next/head";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import ProductIndex from "@/app/components/Product/ProductIndex";
import { useEffect } from "react";

export default function Product() {



  return (
        <>
            <Head>
                <title>Gyloop - Product Overview</title>
            </Head>

            <HeaderNoMenuTransparent type = {0} />
            <ProductSlider />
            <ProductIndex />
            <Footer />
            
        </>

    )
}
