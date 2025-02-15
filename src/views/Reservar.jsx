import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../components/Calendar";
import CourtSelector from "../components/CourtSelector";
import TimeSlots from "../components/TimeSlots";
import { fetchTurnosAction } from "../Redux/TurnosActions";
import styles from "./Reservar.module.css";
import BouncingBalls from "../components/BouncingBall"; // Asegúrate de tener el componente correcto

export default function Reservar() {
  const dispatch = useDispatch(); 
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const { loading, error } = useSelector((state) => state.turnos); 

  useEffect(() => {
    dispatch(fetchTurnosAction());
  }, [dispatch]);

  return (
    <div className={styles.mainContainer}>
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <CourtSelector selectedCourt={selectedCourt} onSelectCourt={setSelectedCourt} />

      {/* Mostrar estado de carga o error */}
      {loading && <p>Cargando turnos...</p>}
      {error && <p>Error: {error}</p>}

      {selectedDate && selectedCourt ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5, ease: "linear" }}
        >
          <TimeSlots selectedDate={selectedDate} selectedCourt={selectedCourt} />
        </motion.div>
      ) : (
        <div className={styles.containerh1}>
          <h1>Selecciona una fecha y cancha para ver los horarios disponibles</h1>
        </div>
      )}

      {/* Si no se ha seleccionado fecha y/o cancha, mostramos las pelotas por encima */}
      {(!selectedDate || !selectedCourt) && (
        <div className={styles.overlay}>
          <BouncingBalls />
        </div>
      )}
    </div>
  );
}
