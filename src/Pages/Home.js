import React from 'react'
import { Link } from 'react-router-dom';
import graduationCapImage from "../img/interesticon_mintgreen_cropped.png";
import NavigationBar from '../components/NavigationBar';

function Home() {

  return (
    <>
      <NavigationBar />
      <h1 className="title">Welcome to Interest!
        <figure>
          <img src={graduationCapImage} width="100"
            alt="graduation cap with dollar sign in background"></img>
        </figure>
      </h1>


      <h2>Student Loan Calculation and Visualization Tool</h2>

      <h3>By: Katelyn Kunzmann, Pran Sutham, and Isaiah Guthala</h3>

      <main style={{ display: "flex", justifyContent: "center" }} >
        <section id="boxedHome">
          <p>
            Have you ever stopped to think about how much you owe in student loans and how long it will take you to pay them off?
          </p>
          <p>
            Well, our app will help you with just that!
          </p>

        </section>

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

        <Link className="clicky-btn" to="/form">Get Started!</Link>

      </main>
    </>
  )
}

export default Home