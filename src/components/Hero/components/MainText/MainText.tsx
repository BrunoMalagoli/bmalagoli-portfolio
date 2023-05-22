import IconArrowDownCircle from "../IconArrowDown";
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
                    .typeString("Desarrollador Frontend")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div className={MainTextStyles.down_button}>
        <span>
          <IconArrowDownCircle />
        </span>
      </div>
    </>
  );
};

export default MainText;
