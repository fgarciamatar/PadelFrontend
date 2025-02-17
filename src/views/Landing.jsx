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
        justifyContent: "center", // Centra verticalmente el contenido
        alignItems: "center", // Centra horizontalmente
        flexDirection: "column",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        textAlign: "center", // Asegura que el texto se mantenga centrado
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
          alignItems: "center",
          position: "relative", // Para que el z-index funcione
          zIndex: 1, // Asegura que los textos estén sobre las pelotas
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
          minFontSize={80} // Tamaño más grande
          style={{ margin: "0 0.2em" }}
        />

        <BlurText
          text="¡Ya reservaste tu turno?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-9xl font-bold italic text-[#3a7be4]" // Aumenta la fuente
          style={{ margin: "0 0.2em" }}
        />

        <Link to="/reservar">
          <Boton texto="Reservar" />
        </Link>
      </div>
    </div>
  );
}
