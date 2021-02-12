import React from "react";
import "./CardCoffe.scss";

const CardCoffe = props => {
  return (
    <div className="imagenes-coffee" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="contenedor-titulo-parrafos">
        <h1 className="titulos">{props.title}</h1>
        <p className="parrafos">{props.texto}</p>
      </div>
    </div>
  );
};

export default CardCoffe;
