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

            <h1>Please enter information</h1>

            <div className="container">

                <form onSubmit={handleSubmit((data) => {
                    navigate('/verify', { state: data });
                })}>

                    <div className="row">
                        <div className="col-25">
                            <label>Field of Study</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("fieldOfStudy")} placeholder="enter your field of study" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Yearly Salary</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("expectedYearlySalary", { required: true })} placeholder="enter your expected yearly salary" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Monthly Net Take Home</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("expectedMonthlyNetTakeHome")} placeholder="enter your expected monthly net take home" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Graduation Month</label>
                        </div>
                        <div className="col-75">
                            <select className="select" {...register("expectedGraduationMonth", { required: true })}>
                                <option value="">Select...</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Graduation Year</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("expectedGraduationYear", { required: true })} placeholder="enter your expected graduation year" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Name</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("loanName", { required: true })} placeholder="enter the loan name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Type</label>
                        </div>
                        <div className="col-75">
                            <select className="select" {...register("loanType", { required: true })}>
                                <option value="">Select...</option>
                                <option value="Federal">Federal</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-75">
                            <select className="select" {...register("subsidized")}>
                                <option value="N/A">Select...</option>
                                <option value="Subsidized">Subsidized</option>
                                <option value="Unsubsidized">Unsubsidized</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Disbursement Month</label>
                        </div>
                        <div className="col-75">
                            <select className="select" {...register("disbursementMonth", { required: true })}>
                                <option value="">Select...</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Disbursement Year</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("disbursementYear", { required: true })} placeholder="enter the disbursement year" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Lender</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("lender")} placeholder="enter lender" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Principal</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("principal", { required: true })} placeholder="enter the loan principal" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Current Loan Balance</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("currentLoanBalance")} placeholder="enter your current loan balance" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Interest Rate</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("interestRate")} placeholder="enter the loan interest rate" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Term</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("loanTerm", { required: true })} placeholder="enter the loan term in MONTHS" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Grace Period</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("gracePeriod")} placeholder="enter grace period in MONTHS" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>How many months of the grace period do you expect to use?</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("gracePeriodUsage")} placeholder="enter expected grace period usage in MONTHS" />
                        </div>
                    </div>

                    <input className="clicky-btn" type="submit" value="Submit" />

                </form>

            </div>

        </>
    )
}

export default Form