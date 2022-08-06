import React from 'react'
import { Link } from 'react-router-dom';
import graduationCapImage from "../img/interesticon_mintgreen_cropped.png";

function NavigationBar() {
  return (
    <div className="navigationBar">
        <Link to="/">
            <img 
                src={graduationCapImage} 
                width="50" 
                alt="graduation cap with dollar sign in background">
            </img>
        </Link>
        <h1 style={{color: 'var(--mint-green)'}}>Interest</h1>
    </div>
  )
}

export default NavigationBar