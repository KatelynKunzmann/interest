import React from 'react';
import { useState } from "react";
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
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <input {...register("loanAmount")} placeholder="Loan amount" />
      <input {...register("loanTerm")} placeholder="Loan Term" />
      <input {...register("interestRate")} placeholder="Interest Rate" />
      <input type="submit" />
    </form>
    </>
  )
}

export default Form