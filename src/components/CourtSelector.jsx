import React from "react";
import styles from "./CourtSelector.module.css"; // Importamos el módulo CSS

export default function CourtSelector({ selectedCourt, onSelectCourt }) {
  return (
    <div className={styles.container}>
      {[1, 2, 3].map((court) => {
        const isSelected = selectedCourt === court;

        return (
          <button
            key={court}
            onClick={() => onSelectCourt(court)}
            className={`${styles.button} ${isSelected ? styles.selected : ""}`}
          >
            Cancha {court}
          </button>
        );
      })}
    </div>
  );
}
