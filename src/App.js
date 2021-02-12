import React from 'react';
import './App.css';
import Intro from './Section/Intro/section1.js';
import Dos from './Section/Dos/section2.js';
import Tres from './Section/Tres/section3.js';
import Cuatro from './Section/Cuatro/section4';
import Cinco from './Section/Cinco/section5';
import Seis from './Section/Seis/section6';
import Siete from './Section/Siete/section7';
import Ocho from './Section/Ocho/section8';

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Dos></Dos>
      <Tres></Tres>
      <Cuatro></Cuatro>
      <Cinco></Cinco>
      <Seis></Seis>
      <Siete></Siete>
      <Ocho></Ocho>
    </div>
  );
}

export default App;
