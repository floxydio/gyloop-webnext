
import AuthComponent from "@/app/components/Auth/AuthComponent"
import NextSEO from "@/app/components/NextHead/NextSEO"
import Head from "next/head"
export default function LoginDemo() {
    return (
        <>
    
            <NextSEO seoHead={{
                title: "Gyloop - Login Demo",
                metaDescription: "Gyloop - Login Demo",
                metaKeywords: "Gyloop - Login Demo",
                metaTitle: "Gyloop - Login Demo",
                metaLocale: "en-US"
            
            }} />
            <div>
                <AuthComponent props={{ TypeHeader: 0 }} />
            </div>
        </>
    )
}
