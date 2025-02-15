import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} container`}> 
      <div className="row align-items-center">
        <div className="col-8">
          <h1 className={styles.logo}>Frisky Padel</h1>
        </div>
        <div className="col-4 text-end">
          <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>
      <div className={`row ${styles.navContainer} ${isOpen ? styles.show : ""}`}>
        <ul className={`${styles.navLinks} col-12`}> 
          <li>
            <Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          </li>
          <li>
            <Link to="/reservar" onClick={() => setIsOpen(false)}>Reservar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
