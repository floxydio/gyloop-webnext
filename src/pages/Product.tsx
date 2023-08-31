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
                {/* <!-- Android  --> */}
                <meta name="theme-color" content="#12AAF2" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* <!-- iOS --> */}
                <meta name="apple-mobile-web-app-title" content="Application Title" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                {/* <!-- Windows  --> */}
                <meta name="msapplication-navbutton-color" content="#12AAF2" />
                <meta name="msapplication-TileColor" content="#12AAF2" />
                <meta
                    name="msapplication-TileImage"
                    content="icons/ms-icon-144x144.png"
                />
                <meta name="msapplication-config" content="icons/browserconfig.xml" />

                {/* <!-- Pinned Sites  --> */}
                <meta name="application-name" content="Application Name" />
                <meta name="msapplication-tooltip" content="Tooltip Text" />
                <meta name="msapplication-starturl" content="/" />

                {/* <!-- Tap highlighting  --> */}
                <meta name="msapplication-tap-highlight" content="no" />

                {/* <!-- UC Mobile Browser  --> */}
                <meta name="full-screen" content="yes" />
                <meta name="browsermode" content="application" />

                {/* <!-- Disable night mode for this page  --> */}
                <meta name="nightmode" content="disable" />

                {/* <!-- Layout mode --> */}
                <meta name="layoutmode" content="fitscreen/standard" />

                {/* <!-- imagemode - show image even in text only mode  --> */}
                <meta name="imagemode" content="force" />

                {/* <!-- Orientation  --> */}
                <meta name="screen-orientation" content="portrait" />
                <title>Gyloop - Product Overview</title>
            </Head>

            <HeaderNoMenuTransparent type={0} />
            <ProductSlider />
            <ProductIndex />
            <Footer />

        </>

    )
}
