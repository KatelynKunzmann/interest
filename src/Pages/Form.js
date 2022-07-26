import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <>
    <h1>Please enter your student loan information</h1>
    <form onSubmit={handleSubmit((data) => {
        navigate('/verify', {state: data});
      })}
    >
      <input className="input" {...register("firstName", { required: true })} placeholder="First name" />
      <input className="input" {...register("lastName", { required: true })} placeholder="Last name" />
      <input className="input" {...register("loanAmount", { required: true })} placeholder="Loan amount" />
      <input className="input" {...register("loanTerm", { required: true })} placeholder="Loan Term" />
      <input className="input" {...register("interestRate", { required: true })} placeholder="Interest Rate" />
      <input className="clicky-btn" type="submit" />
    </form>
    </>
  )
}

export default Form