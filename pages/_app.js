// pages/_app.js
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Script from 'next/script'; // Importe o componente Script

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-965907484');
          `,
        }}
      />
      <DefaultSeo
        title="Casa à Venda em Águas de Lindóia"
        description="Descubra seu novo lar em Águas de Lindóia. Casa exclusiva à venda com ótima localização e conforto."
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://casaemaguasdelindoia.vercel.app/",
          siteName: "Casa em Águas de Lindóia",
          title: "Casa à Venda em Águas de Lindóia",
          description:
            "Descubra seu novo lar em Águas de Lindóia. Casa exclusiva à venda com ótima localização e conforto.",
          images: [
            {
              url: "https://casaemaguasdelindoia.vercel.app/capa.png",
              width: 1200,
              height: 630,
              alt: "Casa à Venda em Águas de Lindóia",
            },
          ],
        }}
        twitter={{
          handle: "@seuUsuario",
          site: "@seuUsuario",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;