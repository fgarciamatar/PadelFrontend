import { Link } from "react-router-dom";
import BlurText from "../components/BlurText";
import BouncingBall from "../components/BouncingBall";
import TextPressure from "../components/TextPressure";
import Boton from "../components/BotonLight";

export default function Landing() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // Contenido en la parte superior
        alignItems: "center", // Centrado horizontal en el contenedor principal
        flexDirection: "column",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Contenedor para las pelotas */}
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "50%",
          zIndex: 0,
        }}
      >
        <BouncingBall />
        <BouncingBall />
      </div>

      {/* Contenedor de textos y botón centrados */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          alignItems: "center", // Centra horizontalmente el contenido interno
        }}
      >
        <TextPressure
          text="Frisky Padel"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#3a7be4"
          strokeColor="#ff0000"
          minFontSize={60}
          style={{ margin: "0 0.2em", zIndex: 1 }}
        />

        <BlurText
          text="Ya reservaste tu turno?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-7xl font-bold italic text-[#3a7be4]"
          style={{ margin: "0 0.2em", zIndex: 1 }}
        />

        <Link to="/reservar">
          <Boton texto="Reservar" />
        </Link>
      </div>
    </div>
  );
}
