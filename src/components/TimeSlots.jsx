import { Clock } from "lucide-react";
import Button from "react-bootstrap/Button";

/* Importamos el módulo CSS */
import styles from "./TimeSlots.module.css"



export default function TimeSlots() {

 
  // Horarios de ejemplo
  const timeSlots = [
    { start: "08:00", end: "09:00" },
    { start: "09:00", end: "10:00" },
    { start: "10:00", end: "11:00" },
    { start: "11:00", end: "12:00" },
    { start: "15:00", end: "16:00" },
    { start: "16:00", end: "17:00" },
    { start: "17:00", end: "18:00" },
    { start: "18:00", end: "19:00" },
    { start: "19:00", end: "20:00" },
    { start: "20:00", end: "21:00" },
    { start: "21:00", end: "22:00" },
  ];

  return (
    <div className={styles.container}>
        
      <div className={styles.timeSlotsContainer}>
        {timeSlots.map((slot) => (
          <div key={slot.start} className={styles.timeSlot}>
            <div className={styles.timeSlotInfo}>
              <Clock className={styles.timeSlotIcon} />
              <div>
                <div className={styles.timeSlotText}>{slot.start} hs</div>
                <div className={styles.timeSlotSubText}>Turno disponible</div>
              </div>
            </div>
            {/* Usamos el Button de React Bootstrap con clase extra para sobrescribir estilos */}
            <Button variant="outline-primary" className={styles.reserveButton}>
              Reservar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
