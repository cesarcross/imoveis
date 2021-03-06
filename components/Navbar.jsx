import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <Link href='/'>
        <a>
          <h3>Home</h3>
        </a>
      </Link>
      <Link href='/'>
        <a>
          <h3>Imoveis</h3>
        </a>
      </Link>
      <Link href='#contact'>
        <a>
          <h3>Contato</h3>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
