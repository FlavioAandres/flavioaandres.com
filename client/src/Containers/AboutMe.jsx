import React from "react";
import "./AboutMe.css";
const AboutMe = (props) => {
  return (
    <div className="content-about-me">
      <p>
        Hola! Soy Flavio Andres,{" "}
        <span>Desarrollo software desde Colombia.</span> Me gusta estar
        constantemente aprendiendo y compartiendo mis conocimientos ya sea en
        charlas, blogs, o videos en Youtube. <span>It makes me happy.</span>
      </p>
      <p>
        Me considero un evangelizador de Amazon Web Services y comparto de él en
        gran parte de mis posts.{" "}
        <span>
          Me gusta experimentar con las tecnologías para comprender sus ventajas
          y desventajas{" "}
        </span>
        , así conoceré cuando es mejor usarlas.
      </p>
      <p>
        Trabajo con diferentes tecnologías Backend, mayormente con Node.JS en
        aplicaciones preparadas para soportar millones de datos.{" "}
        <span>Soy amante del performance.</span> En mi día a día como
        desarollador interactúo con Redis, DynamoDB, MongoDB, Oracle, MySQL &
        MariaDB.
      </p>
      <p>Sin más, <b> Bienvenido 👋🏼👋🏼</b></p>
      <p>
        <strong>
          <br />
          👉🏼 FlavioAandres
          <br />
          📧 FlavioAandres24@gmail.com
        </strong>
      </p>
      <p></p>
    </div>
  );
};

export default AboutMe;
