import React from 'react';
import './Hero.css'

const Hero = ({handleLogout}) => {

    return (
        <section className="hero">
           
                <button className= "hero__btn" onClick={handleLogout}>Logout</button>
            
        </section>
    )
}

export default Hero;