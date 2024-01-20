import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar.jsx";
import Contato from "../components/Contato";
import Aguas from "./aguasdelindoia";
import Gallery from "../components/Gallery";
import DownloadPresentation from "../components/DownloadPresentation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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

      <footer className={styles.footer}></footer>
    </div>
  );
}
