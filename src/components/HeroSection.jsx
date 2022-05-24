import React from 'react'
import '../App.css'
import './HeroSection.css'
import Button  from './Button' 

function HeroSection() {
  return (
    <div className='hero-container'>

        <video className='vid' src="../public/images/img-home.jpg" autoPlay loop muted />

        <h1>Love God Love People</h1>
        <p>Be A Part Of The family</p>
        <div className="hero-btns">

          <Button className="btns" 
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'>
            JOIN US
          </Button>
          <Button className="btns" 
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'>
            SUNDAYS SERVICES
          </Button>
        </div>


    </div>
  )
}

export default HeroSection