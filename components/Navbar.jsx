import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <h3>Home</h3>
      </Link>
      <Link href="/">
        <h3>Imoveis</h3>
      </Link>
      <Link href="#contact">
        <h3>Contato</h3>
      </Link>
    </div>
  );
};

export default Navbar;
