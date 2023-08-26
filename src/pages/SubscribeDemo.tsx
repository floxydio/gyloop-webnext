import Head from "next/head";
import DemoComponent from "../app/components/subscribe/DemoComponent";


export default function SubscribeDemo() {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Gyloop - Subscribe Demo User</title>
      </Head>
      <DemoComponent />
    
    </>
  )
}
