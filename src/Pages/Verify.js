import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Verify() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
    <h1>Please verify the information you provided</h1>

    <h2>First Name: {data.firstName}</h2>
    <h2>Last Name: {data.lastName}</h2>
    <h2>Loan Amount: {data.loanAmount}</h2>
    <h2>Loan Term: {data.loanTerm}</h2>
    <h2>Interest Rate: {data.interestRate}</h2>

    <Link className="clicky-btn" to="/form">Go back</Link>
    </>
  )
}

export default Verify