import React from 'react';
import styles from '../styles/Home.module.css';

function Navbar({ result }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar}>
        {result?.map((header) => (
          <li className={styles.navbar}>
            <a className={styles.navbar}>{header.sTitle}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
