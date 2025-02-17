import React, { useState, useEffect, useRef } from "react";
import { IoMdTennisball } from "react-icons/io";
import styles from "./BouncingBall.module.css";

const BALL_COUNT = 5;
const BALL_SIZE = 30;
const SPEED = 5; // Velocidad aumentada

const getRandomVelocity = () => ({
  x: (Math.random() - 0.5) * SPEED * 2,
  y: (Math.random() - 0.5) * SPEED * 2,
});

const getRandomPosition = (containerWidth, containerHeight) => ({
  x: Math.random() * (containerWidth - BALL_SIZE),
  y: Math.random() * (containerHeight - BALL_SIZE),
});

const getRandomRotationSpeed = () => (Math.random() - 0.5) * 10; // Rotación aleatoria

const BouncingBalls = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [balls, setBalls] = useState([]);

  // Una vez montado el componente, obtenemos el tamaño del contenedor
  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });

      // Inicializamos las pelotas con posiciones y velocidades aleatorias
      const initialBalls = Array.from({ length: BALL_COUNT }).map(() => ({
        position: getRandomPosition(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        ),
        velocity: getRandomVelocity(),
        rotation: 0,
        rotationSpeed: getRandomRotationSpeed(),
      }));
      setBalls(initialBalls);
    }
  }, []);

  // Bucle de animación
  useEffect(() => {
    // Solo iniciamos la animación si tenemos un tamaño válido
    if (containerSize.width === 0 || containerSize.height === 0) return;

    const updatePositions = () => {
      setBalls((prevBalls) =>
        prevBalls.map(({ position, velocity, rotation, rotationSpeed }) => {
          let newX = position.x + velocity.x;
          let newY = position.y + velocity.y;
          let newRotation = rotation + rotationSpeed;
          let newVelocity = { ...velocity };

          // Rebote en los bordes
          if (newX <= 0 || newX >= containerSize.width - BALL_SIZE) {
            newVelocity.x = -velocity.x;
          }
          if (newY <= 0 || newY >= containerSize.height - BALL_SIZE) {
            newVelocity.y = -velocity.y;
          }

          return {
            position: { x: newX, y: newY },
            velocity: newVelocity,
            rotation: newRotation,
            rotationSpeed,
          };
        })
      );

      requestAnimationFrame(updatePositions);
    };

    const animationId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationId);
  }, [containerSize]);

  return (
    <div ref={containerRef} id="ball-container" className={styles.container}>
      {balls.map((ball, index) => (
        <IoMdTennisball
          key={index}
          className={styles.ball}
          style={{
            transform: `translate(${ball.position.x}px, ${ball.position.y}px) rotate(${ball.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
