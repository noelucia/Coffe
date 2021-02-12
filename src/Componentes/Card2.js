import React from "react";
import "./Card2.scss";

const Card2 = props => {
  return (
    <div className="contenedor-coffee2">
      <div className="contenedor-titulo-parrafos2">
        <div className="contenedor-tamaño">
           <h1 className="card2-titulos">{props.title}</h1>
            <p className="card2-parrafos">{props.texto}</p>
           <span className="boton-falso">{props.more}</span>
        </div>
      </div>
      <div
        className="imagenes-coffee2"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
    </div>
  );
};

export default Card2;
