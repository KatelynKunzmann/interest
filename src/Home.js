import React from 'react'
import graduationCapImage from "./img/interesticon_mintgreen_cropped.png";

function Home() {
  return (
    <>
    <h1 class="title">Welcome to Interest!
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

    <section>
        The only information you will need:
        <div>
        <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
            <li>Example 5</li>
            <li>Example 6</li>
        </ul>
        </div>
    </section>

    <div class="clicky-btn">
        Get Started!
    </div>

    </main>
    </>
  )
}
export default Home