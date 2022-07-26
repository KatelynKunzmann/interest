import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  

  return (
    <>
    <NavigationBar />

    <h1>Please enter loan information</h1>

    <div className="container">
        
    <form onSubmit={handleSubmit((data) => {
        navigate('/verify', {state: data});
    })}>

    <div className="row">
        <div class="col-25">
            <label>First Name</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("firstName", { required: true })} placeholder="enter your first name" />
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Last Name</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("lastName", { required: true })} placeholder="enter your last name" />
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Loan Amount</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("loanAmount", { required: true })} placeholder="enter the loan amount" />
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Loan Term</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("loanTerm", { required: true })} placeholder="enter the loan term" />
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Interest Rate</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("interestRate", { required: true })} placeholder="enter your loan's interest rate" />
        </div>
    </div>

    <input className="clicky-btn" type="submit"/>

    </form>

    </div>

    </>
  )
}

export default Form