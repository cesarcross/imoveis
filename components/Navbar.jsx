import styles from "../styles/Navbar.module.scss";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <ScrollLink to="home" smooth={true} duration={1000}>
        <h3>Home</h3>
      </ScrollLink>
      <ScrollLink to="gallery" smooth={true} duration={1000}>
        <h3>Fotos</h3>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={1000}>
        <h3>Contato</h3>
      </ScrollLink>
    </div>
  );
};

export default Navbar;
