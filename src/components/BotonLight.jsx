import React, { useState } from "react";

export default function Boton({ texto }) {
  const [hover, setHover] = useState(false);

  // Estilos del botón (estilo base y cambio de fondo/sombra en hover)
  const buttonStyles = {
    position: "relative",
    padding: "10px 20px",
    borderRadius: "7px",
    border: "1px solid rgb(61, 106, 255)",
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "2px",
    background: hover ? "rgb(61, 106, 255)" : "transparent",
    color: "#fff",
    overflow: "hidden",
    boxShadow: hover
      ? "0 0 30px 5px rgba(0, 142, 236, 0.815)"
      : "0 0 0 0 transparent",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    outline: "none"
  };

  // Simulación del pseudo-elemento ::before con un <span>
  const beforeSpanStyles = {
    position: "absolute",
    top: "7%",
    left: hover ? "100%" : "0%",
    width: hover ? "100%" : "0px",
    height: "86%",
    background: "#fff",
    boxShadow: "0 0 50px 30px #fff",
    transform: "skewX(-20deg)",
    opacity: hover ? 1 : 0,
    transition: "all 0.5s linear",
    pointerEvents: "none" // para que no interfiera con los eventos del botón
  };

  return (
    <div>
      <button
        style={buttonStyles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* El span simula el ::before */}
        <span style={beforeSpanStyles}></span>
        {texto}
      </button>
    </div>
  );
}
