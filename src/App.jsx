import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./views/Layout"
import Navbar from "./components/Navbar"
import Reservar from "./views/Reservar"
import BouncingBall from "./components/BouncingBall"


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<BouncingBall />} />
        <Route path="/nosotros" element={<Layout />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </Router>
  )
}

export default App
