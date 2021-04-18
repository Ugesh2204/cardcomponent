import React from 'react'
import './Card.css';

function Card() {
    return (
        <>
        <div className='cards__item__One'>
           <div className ="cards__item__inner">
            <img src="images/icon-sedans.svg"/>
            <h1 className="title">SEDANS</h1>
            <p className="inner-text">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
               or on your next road trip.</p>
            <button>Learn More</button>   
           </div>
        </div>
        <div className='cards__item__Two'>
            <div className ="cards__item__inner">
            <img src="images/icon-suvs.svg"/>
            <h1 className="title">SUVS</h1>
            <p className="inner-text">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.</p>
            <button>Learn More</button>   
           </div>
        </div>
        <div className='cards__item__Three'>
            <div className ="cards__item__inner">
                <img src="images/icon-luxury.svg"/>
                <h1 className="title">SEDANS</h1>
                <p className="inner-text">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.</p>
                <button>Learn More</button>   
            </div>
        </div>

        </>
    )
}

export default Card
