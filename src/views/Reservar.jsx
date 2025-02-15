import { useState } from "react";
import Calendar from "../components/Calendar";
import CourtSelector from "../components/CourtSelector";
import TimeSlots from "../components/TimeSlots";

export default function Reservar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);

  return (
    <div>
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <CourtSelector selectedCourt={selectedCourt} onSelectCourt={setSelectedCourt}/>
      <TimeSlots selectedDate={selectedDate} selectedCourt={selectedCourt}/>
    </div>
  );
}
