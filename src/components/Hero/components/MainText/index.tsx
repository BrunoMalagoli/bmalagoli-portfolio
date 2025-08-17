import MainTextStyles from "./styles/index.module.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const MainText = () => {
  return (
    <>
      <div className={MainTextStyles.main_container}>
        <div>
          <p>Hola! Mi nombre es</p>
          <h1>Bruno Malagoli</h1>
          {/*Texto con animación de typeo*/}
          <span>
            Soy
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Desarrollador FullStack")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </span>
          
          {/* CTA Buttons */}
          <div className={MainTextStyles.cta_buttons}>
            <button className={MainTextStyles.cta_primary}>
              <a href="/BrunoCV.pdf" download={"Bruno_Malagoli_CV"}>
                Descargar CV
              </a>
            </button>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className={MainTextStyles.cta_secondary}>
                Contactarme
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainText;
