import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
    <link rel="icon" href="/favicon.ico" />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7ZHMPQXBW0"
      />
      <Script src="https://cdn.lordicon.com/bhenfmcm.js" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7ZHMPQXBW0');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
