import React from 'react'
import { Link } from 'react-router-dom';
import graduationCapImage from "../img/interesticon_mintgreen_cropped.png";
import NavigationBar from '../components/NavigationBar';


function Home() {
  return (
    <>
    <NavigationBar />

    <div className="whiteText">

    <h1 className="title">Welcome to Interest!
        <figure>
        <img src={graduationCapImage} width="100" 
        alt="graduation cap with dollar sign in background"></img>
        </figure>
    </h1>

    <h2>Student Loan Calculation and Visualization Tool</h2>

    <h3>By: Katelyn Kunzmann, Pran Sutham, and Isaiah Guthala</h3>

    <main>
        <div id="description">
        Have you ever stopped to think about how much in student loans you will need to take out 
        or will have taken out by the time you are graduated?

        <p>Well, our app will help you with just that!</p> 
        </div> 

    <Link className="clicky-btn" to="/form">Get Started!</Link>

    </main>

    </div>
    </>
  )
}
export default Home