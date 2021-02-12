import React from "react";
import "./section1.scss"

const Intro=()=>{
    return(
        <section className="fondo-contenedor">
            <div className="fondo">
                <h1 className="titulo1">Portwell, Inc.</h1>
                <h2 className="titulo2">Serving only the best since 2019</h2>
                <h3 className="titulo3">E X P L O R E</h3>
            </div>
            <span>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
        </section>
    )

}




export default Intro;