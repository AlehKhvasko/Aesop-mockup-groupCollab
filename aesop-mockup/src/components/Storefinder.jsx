import React from 'react';
import storeImage from '../assets/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg'

function Storefinder() {
    return (
        <div className='store-finder' >
        <div id='left-side' >
        <p id='AD' > Architecture and Design </p>
        <p id='AD-info' >Spaces of distinction</p>
        </div>
        <div id='right-side' >
        <p> Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency. </p>
        <button id='store-button' > Find a nearby store ➝  </button>
        </div>
         <img id='store-images' src={storeImage} alt="stores"/>
         <div className='adresses' >
         <p id='bleecker' > Aesop Bleecker street </p>
         <p id='bleecker-adress' > 341 Bleecker street, New York, NY 10014 </p>
         </div>
        </div>
    );
}

export default Storefinder