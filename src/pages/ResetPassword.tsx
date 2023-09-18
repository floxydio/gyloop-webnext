import ResetPasswordComponent from '@/app/components/Auth/ResetPasswordComponent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import Head from 'next/head';
import React from 'react';

export default function ResetPassword() {
  return (
    <>
     
        <NextSEO seoHead={{
          title: "Gyloop - Reset Password",
          metaDescription: "Gyloop - Reset Password",
          metaKeywords: "Gyloop - Reset Password",
          metaTitle: "Gyloop - Reset Password",
          metaLocale: "en-US"
        }} />
      <ResetPasswordComponent />
    </>
  );
}
