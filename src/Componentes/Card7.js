import React from "react";
import "./Card7.scss";

const Card7 = props => {
    return (
      <div className="contenedor-cards"> 
      <div
        className="imagene-coffee7-contenedor"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="contenedor-tamaño7-textos">
          <h1 className="card7-titulos">{props.title}</h1>
          <p className="card-subtitulo">{props.subtitulo}</p>
          <p className="card7-parrafos">{props.texto}</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default Card7;
  