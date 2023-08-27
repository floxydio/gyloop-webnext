
import Head from "next/head"
import Auth from "../app/components/auth/AuthComponent"
export default function LoginDemo() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Gyloop - Login Demo</title>

            </Head>
            <div>
                <Auth props={{ TypeHeader: 0 }} />
            </div>
        </>
    )
}
