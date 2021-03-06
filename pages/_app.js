import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Contato from '../components/Contato';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ToastContainer style={{ fontSize: '1.5rem' }} />
      <Component {...pageProps} />
      <Contato />
    </>
  );
}

export default MyApp;
