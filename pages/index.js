import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar.jsx";
import Contato from "../components/Contato";
import Aguas from "./aguasdelindoia";
import Gallery from "../components/Gallery";
import DownloadPresentation from "../components/DownloadPresentation";
import WhatsappButton from "../components/WhatsappButton.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/house.ico" />

         <meta name="description" content="Encantadora casa à venda em Águas de Lindóia com área de lazer, entorno natural e localização estratégica. Clique e saiba mais!" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:title" content="Casa a Venda em Aguas de Lindoia" />
        <meta property="og:description" content="Encantadora casa à venda em Águas de Lindóia com área de lazer, entorno natural e localização estratégica." />
        <meta property="og:image" content="https://imoveis.vercel.app/capa.png" />
        <meta property="og:url" content="https://imoveis.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casa à Venda em Águas de Lindóia" />
        <meta name="twitter:description" content="Encantadora casa à venda em Águas de Lindóia com área de lazer e ótima localização." />
        <meta name="twitter:image" content="https://imoveis.vercel.app/capa.png" />
      </Head>

      <main>
        <div>
          <Navbar />
          <div className={styles.container}>
            <Aguas />
            <DownloadPresentation />
            <Gallery />
            <Contato />
          </div>
        </div>
      </main>

            <WhatsappButton /> 


      <footer className={styles.footer}></footer>
    </div>
  );
}
