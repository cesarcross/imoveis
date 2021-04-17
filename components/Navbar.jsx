import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <h3>Home</h3>
      <h3>Imoveis</h3>
      <h3>Contato</h3>
    </div>
  );
};

export default Navbar;
