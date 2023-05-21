import { useEffect } from "react";
import config from "../../../../particlesjs-config.json";

interface CustomWindow extends Window {
  particlesJS?: any | Window;
}

function ParticleElement() {
  useEffect(() => {
    // Primero asegurar que no corre del lado del servidor, osea que el elemento window exista
    if (typeof window !== "undefined") {
      //Cargando el script particles.js
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        // Inicialización del script
        (window as CustomWindow).particlesJS("particles-js", config);
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="absolute right-0 bottom-0 left-0 height-100%"
      id="particles-js"
      style={{
        zIndex: -1200,
        position: "absolute",
        height: "98%",
        width: "100%",
      }}
    />
  );
}

export default ParticleElement;
