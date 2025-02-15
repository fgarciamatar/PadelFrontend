import { Clock } from "lucide-react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchTurnosAction } from "../Redux/TurnosActions";
import styles from "./TimeSlots.module.css";

export default function TimeSlots({ selectedDate, selectedCourt }) {
  const dispatch = useDispatch();
  const { turnos, loading, error } = useSelector((state) => state.turnos);

  // Se dispara la acción para obtener los turnos
  useEffect(() => {
    dispatch(fetchTurnosAction());
  }, [dispatch]);

  // Lista de horarios de ejemplo
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

  // Convertir la fecha seleccionada a "YYYY-MM-DD"
  const formattedDate = selectedDate
    ? new Date(selectedDate).toISOString().split("T")[0]
    : "";

  // Función que busca el turno que coincide con la fecha, hora y cancha
  const getMatchingTurno = (slot) => {
    if (!formattedDate || !selectedCourt) return null;
    return turnos.find(
      (turno) =>
        turno.fecha === formattedDate &&
        turno.hora.slice(0, 5) === slot.start &&
        turno.cancha_id === selectedCourt
    );
  };

  // Mostrar mensaje de carga o error en caso de que existan
  if (loading) return <p>Cargando turnos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h3>
        Horarios disponibles para el {formattedDate} - Cancha {selectedCourt}
      </h3>
      <div className={styles.timeSlotsContainer}>
        {timeSlots.map((slot) => {
          const matchingTurno = getMatchingTurno(slot);
          const reservado = Boolean(matchingTurno);
          // Si existe el turno y tiene turno_fijo en true, se indica que es turno fijo
          const esTurnoFijo = matchingTurno ? matchingTurno.turno_fijo : false;
          const textoEstado = reservado
            ? esTurnoFijo
              ? "No disponible (Turno fijo)"
              : "No disponible"
            : "Turno disponible";

          return (
            <div
              key={slot.start}
              className={`${styles.timeSlot} ${reservado ? styles.notAvailable : ""}`}
            >
              <div className={styles.timeSlotInfo}>
                <Clock className={styles.timeSlotIcon} />
                <div>
                  <div className={styles.timeSlotText}>{slot.start} hs</div>
                  <div className={styles.timeSlotSubText}>{textoEstado}</div>
                </div>
              </div>
              {/* Solo se muestra el botón si el turno está disponible */}
              {!reservado && (
                <Button variant="outline-primary" className={styles.reserveButton}>
                  Reservar
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
