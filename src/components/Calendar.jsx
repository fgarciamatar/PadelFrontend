import { addDays, format, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Calendar.module.css"; // Importamos los estilos

export default function Calendar({ selectedDate, onSelectDate }) {
  const today = new Date();
  const weekStart = startOfWeek(today, { locale: es });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h3 className={styles.title}>{format(today, "MMMM", { locale: es })}</h3>
        </Col>
      </Row>
      <div className={styles.scrollContainer}>
        <div className={styles.weekDaysWrapper}>
          {weekDays.map((date) => (
            <Button
              key={date.toISOString()}
              variant={selectedDate?.toDateString() === date.toDateString() ? "primary" : "secondary"}
              className={`${styles.button} ${selectedDate?.toDateString() === date.toDateString() ? styles.buttonPrimary : styles.buttonSecondary}`}
              onClick={() => onSelectDate(date)}
            >
              <span className={styles.dayName}>{format(date, "EEEE", { locale: es })}</span>
              <span className={styles.dayNumber}>{format(date, "d")}</span>
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
}


