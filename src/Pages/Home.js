import React from 'react'
import { Link } from 'react-router-dom';
import graduationCapImage from "../img/interesticon_mintgreen_cropped.png";
import NavigationBar from '../components/NavigationBar';

function Home() {

  return (
    <>
      <html>
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

        </main>
        <section id="boxedHomeInfo" style={{ display: "inline-block", justifyContent: "center" }}>
          The only information you will need:
          <div>
            <ul>
              <li>Graduation Date</li>
              <li>Type of Loan</li>
              <li>Disbursement Date</li>
              <li>Principal Amount</li>
              <li>Current Loan Balance</li>
              <li>Interest Rate</li>
            </ul>
          </div>
        </section>
        <div>
          <Link className="clicky-btn" to="/form">Get Started!</Link>
        </div>

      </html>
    </>
  )
}

export default Home