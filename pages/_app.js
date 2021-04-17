import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Contato from '../components/Contato';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Contato />
    </>
  );
}

export default MyApp;
