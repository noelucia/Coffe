import React from "react";
import "./section2.scss";
import CardCoffee from '../../Componentes/CardCoffee';
import Coffee1 from './coffee_item_2.png'
import Coffee2  from './coffee_item_1.png';
import Coffee3  from './coffee_item_3.png';


const Dos=()=>{
    const imagenesCoffe=[
        {
            img:Coffee1,
            title: "MOCHA LATTE",
            texto:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    
        },
        {
            img:Coffee2,
            title: "POUR OVER",
            texto:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    
        },
        {
            img:Coffee3,
            title: "ESPRESSO",
            texto:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    
        },
    ];
    return(
    <section className="section2">
        <div className="texto">
        <h1>WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
        </div>
        {imagenesCoffe.map(card=> { 
            return (<CardCoffee title={card.title} img={card.img} texto={card.texto}></CardCoffee>); 
        })}


    </section>

    )
}

export default Dos;