import React from "react";
import "./Card3.scss";

const Card3 = props => {
  return (
    <div
      className="imagene-coffee3-contenedor"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="contenedor-tamaño3-textos">
        <h1 className="card3-titulos">{props.title}</h1>
        <p className="card3-parrafos">{props.texto}</p>
        <span className="boton-falso3">{props.more}</span>
      </div>
    </div>
  );
};

export default Card3;
