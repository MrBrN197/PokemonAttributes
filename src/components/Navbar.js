import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.back}>
      <IoIosArrowBack size="100%" />
    </Link>
    <Link to="/">
      <h1>Pokemon metrics</h1>
    </Link>
    <div className={styles.settings}>
      <IoIosSettings size="100%" />
    </div>
  </header>
);

export default Navbar;
