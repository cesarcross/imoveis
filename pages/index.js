import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar.jsx';
import Image from 'next/image';
import Link from 'next/link';
import Contato from '../components/Contato';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* <Navbar /> */}
        <div className='container'>
          <div className={styles.realEstateContainer}>
            <div className={styles.card}>
              <Link href='/aguasdelindoia'>
                <a>
                  <Image
                    src='/aguas.jpeg'
                    alt='Apartamento em Águas de Lindóia'
                    width={200}
                    height={150}
                  />
                  <div className={styles.info}>
                    <h4>Apartamento </h4>
                    <p>Águas de Lindóia/SP</p>
                    <p>80m2</p>
                    {/* <p>R$ 360.000</p> */}
                    <p>Saiba mais...</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href='/limao'>
                <a>
                  <Image
                    src='/limao.jpeg'
                    alt='Apartamento em Águas de Lindóia'
                    width={200}
                    height={150}
                  />
                  <div className={styles.info}>
                    <h4>Casa Residencial</h4>
                    <p>Zona Norte/SP</p>
                    <p>80m2</p>

                    {/* <p>R$ 540.000</p> */}
                    <p>Saiba mais...</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href='/prediocomercial'>
                <a>
                  <Image
                    src='/firma.jpeg'
                    alt='Apartamento em Águas de Lindóia'
                    width={200}
                    height={150}
                  />
                  <div className={styles.info}>
                    <h4>Prédio Comercial </h4>
                    <p>Zona Norte/SP</p>
                    <p>80m2</p>

                    {/* <p>R$ 540.000</p> */}
                    <p>Saiba mais...</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
