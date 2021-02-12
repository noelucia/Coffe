import React from "react";
import "./section7.scss";
import Card7 from "../../Componentes/Card7";
import Gente from "./Gente.jpeg";
import Taza from "./pexels-photo-64775.jpeg";
import Mesa from "./pexels-photo-373888.jpeg";
const Siete = () => {
  const imagenesCafe = [
    {
      img: Gente,
      title: "THE GREAT OUTDOORS",
      subtitulo: "Sep 27, 2017",
      texto:
        "Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      img: Taza,
      title: "SHARED MEMORIES",
      subtitulo: "Sep 27, 2017",
      texto:
        "Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      img: Mesa,
      title: "THE LOOKOUT",
      subtitulo: "Sep 27, 2017",
      texto:
        "Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
    }
  ];

  return (
    <section className="section7">
      <div className="texto-section-7">
        <h1 className="titulo-section7">LATEST FROM BLOG</h1>
        <p className="parrafo-section7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo
        </p>
      </div>
      
      <div className="card-cafe-7">
        {imagenesCafe.map(card => {
          return (
            <Card7
              title={card.title}
              img={card.img}
              texto={card.texto}
              subtitulo={card.subtitulo}
            ></Card7>
          );
        })}
      </div>
      <div className="contenedor-boton">
        <span className="boton">BROWSE MENU</span>
      </div>
    </section>
  );
};

export default Siete;
