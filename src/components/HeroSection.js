import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button> 
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i className="fas fa-play-circle"></i>
                </Button> 
            </div>
        </div>
    )
}

export default HeroSection
