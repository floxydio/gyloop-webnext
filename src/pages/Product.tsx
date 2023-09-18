"use client"
import Footer from "@/app/components/Footer/Footer";
import HeaderProduct from "@/app/components/Header/HeaderProduct";
import Header from "@/app/components/Header/header";
import ProductSlider from "@/app/components/SliderNavbar/ProductSlider";
import Head from "next/head";
import HeaderNoMenuTransparent from "@/app/components/Header/HeaderNoMenuTransparent";
import ProductIndex from "@/app/components/Product/ProductIndex";
import NextSEO from "@/app/components/NextHead/NextSEO";

export default function Product() {



    return (
        <>
            <NextSEO seoHead={{
                title: "Gyloop - Product Overview",
                metaDescription: "Gyloop - Product Overview",
                metaKeywords: "Gyloop - Product Overview",
                metaTitle: "Gyloop - Product Overview",
                metaLocale: "en-US"
            }}/>

            <HeaderNoMenuTransparent type={0} />
            <ProductSlider />
            <ProductIndex />
            <Footer />

        </>

    )
}
