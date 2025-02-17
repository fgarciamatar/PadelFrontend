import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";
import Nosotros from "./views/Nosotros";
import Reservar from "./views/Reservar";

function App() {
  return (
    <Router>
  {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </Router>
  );
}

export default App;
