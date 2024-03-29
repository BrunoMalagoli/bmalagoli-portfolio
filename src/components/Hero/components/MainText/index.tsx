import MainTextStyles from "./styles/index.module.css";
import Typewriter from "typewriter-effect";

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
        </div>
      </div>
    </>
  );
};

export default MainText;
