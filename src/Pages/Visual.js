import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';

function Visual() {
  const location = useLocation();
  const input = location.state;
  
  return (
    <>

    <NavigationBar />
    
    <h1>Visualization Page</h1>

    <h2>
      First Name: {input.firstName}
    </h2>
    
    <h2>
      Last Name: {input.lastName}
    </h2>

    <h2>
      Loan Amount: {input.loanAmount}
    </h2>

    <h2>
      Loan Term: {input.loanTerm}
    </h2>

    <h2>
      Interest Rate: {input.interestRate}
    </h2>

    <button className="clicky-btn">Evaluate Another Loan</button>
    </>
  )
}

export default Visual