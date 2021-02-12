import React from "react";
import "./section5.scss";

const Cinco = () => {
  return (
    <section className="contenedor-fondo">
      <div className="fondo-5">
        <h1 className="titulo-5">THE BEST COFFEE SHOP</h1>
        <div className="iconos-todos">
          <div class="icono-1">
            <img src="https://image.ibb.co/n5gUtm/icon_1.png"></img>
            <h4>BEST BEANS</h4>
          </div>
          <div class="icono-2">
            <img src="https://image.ibb.co/dwEXDm/icon_2.png"></img>
            <h4>BEST BEANS</h4>
          </div>
          <div class="icono-3">
            <img src="https://image.ibb.co/j5Og66/icon_3.png"></img>
            <h4>BEST BEANS</h4>
          </div>
        </div>
        <p className="parrafo-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, omnis iste natus error sit
          voluptatem accusantium doloremque, totam rem aperiam, voluptatem
          accusantium doloremque.
        </p>
        <div className="boton-5">
          <h3>ABOUT US</h3>
        </div>
      </div>
    </section>
  );
};

export default Cinco;
