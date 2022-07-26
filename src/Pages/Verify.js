import React from 'react'
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Verify() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const input = location.state;

  return (
    <>
    <h1>Verify the information you entered</h1>
    <form onSubmit={handleSubmit((data) => {
        navigate('/visual', {state: data});
      })}
    >
      <h2>First Name</h2>
      <input className="verify" {...register("firstName")} defaultValue={input.firstName} />
      
      <h2>Last Name</h2>
      <input className="verify" {...register("lastName")} defaultValue={input.lastName} />
      
      <h2>Loan Amount</h2>
      <input className="verify" {...register("loanAmount")} defaultValue={input.loanAmount} />
      
      <h2>Loan Term</h2>
      <input className="verify" {...register("loanTerm")} defaultValue={input.loanTerm} />
      
      <h2>Interest Rate</h2>
      <input className="verify" {...register("interestRate")} defaultValue={input.interestRate} />
      
      <input type="submit" value="Confirm" className="clicky-btn"/>
    </form>
    </>
  )
}

export default Verify