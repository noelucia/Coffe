import React from "react";
import "./section4.scss";
import Card2 from "../../Componentes/Card2";
import Card3 from "../../Componentes/Card3";
import PrimeraCoffee from "./section_bg_9.jpg";
import SegundaCoffee from "./section_bg_10.jpg";

const Cuatro = () => {
  const todasCoffe2 = 
    {
      img2: PrimeraCoffee,
      title: "FRESH BEANS",
      texto:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      more: "LEARN MORE",
    };
const todasCoffe3=
    {
      img2: SegundaCoffee,
      title: "GREAT COFFEE",
      texto:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      more: "LEARN MORE",
    }
  return (
    <section className="dos-card">
          <Card2
            title={todasCoffe2.title}
            img={todasCoffe2.img2}
            texto={todasCoffe2.texto}
            more={todasCoffe2.more}
          ></Card2>
          <Card3
            title={todasCoffe3.title}
            img={todasCoffe3.img2}
            texto={todasCoffe3.texto}
            more={todasCoffe3.more}
          ></Card3>
    </section>
  );
};

export default Cuatro;
