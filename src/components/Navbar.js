/* eslint-disable */
import styles from './Navbar.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.back}>
      <IoIosArrowBack size="100%" />
    </div>
    <Link to="/">
      <h1>Pokemon metrics</h1>
    </Link>
  </header>
);

export default Navbar;
