import React from "react";
import "./section8.scss";

const Ocho = () => {
  return (
    <footer className="footer">
      <div className="fondo footer-izquierda">
        <h1 className="titulo-footer">COME ON IN!</h1>
        <h2 className="titulo2-footer">WEEKSDAY</h2>
        <p className="texto-chiquito">08PM - 12AM</p>
        <h2 className="titulo2-footer">WEEKENDS</h2>
        <p className="texto-chiquito">12PM - 02AM</p>
      </div>
      <div className="fondo footer-derecha">
        <h1 className="titulo-footer">CONTACT</h1>
        <h2 className="titulo2-footer">PHONE</h2>
        <p className="texto-chiquito">+(000) 111 222 333</p>
        <h2 className="titulo2-footer">MAIL</h2>
        <p className="texto-chiquito">address@mail.com</p>
        <h2 className="titulo2-footer">ADDRESS</h2>
        <p className="texto-chiquito">543 TN, doula street NY, New York</p>
      </div>
    </footer>
  );
};

export default Ocho;
