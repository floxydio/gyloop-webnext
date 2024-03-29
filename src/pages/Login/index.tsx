
import AuthComponent from "@/app/components/Auth/AuthComponent"
import NextSEO from "@/app/components/NextHead/NextSEO";
export default function Login() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Login",
        metaDescription: "Gyloop - Login",
        metaKeywords: "Gyloop - Login",
        metaTitle: "Gyloop - Login",
        metaLocale: "en-US"

      }} />
      <AuthComponent props={{ TypeHeader: 1 }} />

    </>
  );
}
