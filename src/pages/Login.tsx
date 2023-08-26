
import Head from "next/head"
import Auth from "../app/components/auth/Auth"
export default function Login() {
  return (
    <>
        <Head>
            <title>Login Page</title>
        </Head>
        <div>
                <Auth props={{TypeHeader: 1}}/>
                
        </div>
    </>
  )
}
