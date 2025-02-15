import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}> 
      <h1 className={styles.logo}>Frisky Padel</h1>

      {/* Botón menú hamburguesa */}
      <div className={styles.menuButtonContainer}>
        <button className={styles.menuButton} onClick={() => setIsOpen(prev => !prev)}>
          ☰
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`${styles.navContainer} ${isOpen ? styles.show : ""}`}>
        <ul className={styles.navLinks}> 
          <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
          <li><Link to="/reservar" onClick={() => setIsOpen(false)}>Reservar</Link></li>
        </ul>
      </div>
    </nav>
  );
}
