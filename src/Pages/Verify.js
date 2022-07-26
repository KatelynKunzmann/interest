import React from 'react'
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function Verify() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const input = location.state;

  return (
    <>

    <NavigationBar />

    <h1>Please verify information entered</h1>

    <div className="container">
        
    <form onSubmit={handleSubmit((data) => {
        navigate('/visual', {state: data});
    })}>

    <div className="row">
        <div class="col-25">
            <label>First Name</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("firstName", { required: true })} defaultValue={input.firstName}/>
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Last Name</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("lastName", { required: true })} defaultValue={input.lastName}/>
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Loan Amount</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("loanAmount", { required: true })} defaultValue={input.loanAmount}/>
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Loan Term</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("loanTerm", { required: true })} defaultValue={input.loanTerm}/>
        </div>
    </div>

    <div className="row">
        <div class="col-25">
            <label>Interest Rate</label>
        </div>
        <div class="col-75">
            <input className="input" {...register("interestRate", { required: true })} defaultValue={input.interestRate}/>
        </div>
    </div>

    <input className="clicky-btn" type="submit" value="Confirm"/>

    </form>

    </div>

    </>
  )
}

export default Verify