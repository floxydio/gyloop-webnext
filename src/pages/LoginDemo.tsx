
import Head from "next/head"
import Auth from "../app/components/auth/Auth"
export default function LoginDemo() {
    return (
        <>
            <Head>
                <title>Login Demo</title>
            </Head>
            <div>
                <Auth props={{ TypeHeader: 0 }} />
            </div>
        </>
    )
}
