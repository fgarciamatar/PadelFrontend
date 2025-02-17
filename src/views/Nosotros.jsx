import "./global.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import team from "../assets/team.jpg";
import styles from "./../views/Nosotros.module.css";
import TextPressure from "../components/TextPressure"

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.title}>Bienvenidos a Frisky Padel</h1>
      <h3 className={styles.subtitle}>Tu lugar para disfrutar del mejor pádel.</h3>

      <section className={styles.history}>
        <h2>Nuestra Historia</h2>
        <p>
          Frisky Padel nació en 2015 con la visión de crear un espacio donde amantes del pádel,
          desde principiantes hasta profesionales, pudieran disfrutar del deporte en las mejores condiciones.
          Lo que comenzó con una sola cancha y un pequeño grupo de entusiastas, hoy se ha convertido
          en un referente local con modernas instalaciones y torneos de alto nivel.
        </p>
        <img src={team} alt="Equipo de Frisky Padel" />
      </section>

      <section className={styles.installations}>
        <h2>Instalaciones de Primer Nivel</h2>
        <p>
          Contamos con <strong>4 canchas de vidrio</strong> con césped sintético profesional, iluminación LED para partidos nocturnos,
          vestuarios equipados y un bar deportivo donde puedes relajarte después de un partido.
        </p>
      </section>

      <section className={styles.gallery}>
        <h2>Nuestras Canchas</h2>
        <div className={styles.imageGallery}>
          <img src={img1} alt="Cancha de pádel 1" />
          <img src={img2} alt="Cancha de pádel 2" />
          <img src={img3} alt="Cancha de pádel 3" />
        </div>
      </section>

      <div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Hello!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
    </div>
  );
}
