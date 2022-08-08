import React from 'react'
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';


function Verify() {
    alert("Please verify all information entered!");
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
                    navigate('/visual', { state: data });
                })}>

                    <div className="row">
                        <div className="col-25">
                            <label>Field of Study</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("fieldOfStudy")} defaultValue={input.fieldOfStudy} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Yearly Salary</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("expectedYearlySalary", { required: true })} defaultValue={input.expectedYearlySalary} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Monthly Net Take Home</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("expectedMonthlyNetTakeHome")} defaultValue={input.expectedMonthlyNetTakeHome} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Expected Graduation Month</label>
                        </div>
                        <div className="col-75">
                            <select className="select" {...register("expectedGraduationMonth", { required: true })} defaultValue={input.expectedGraduationMonth}>
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
                            <input className="input" {...register("expectedGraduationYear", { required: true })} defaultValue={input.expectedGraduationYear} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Name</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("loanName", { required: true })} defaultValue={input.loanName} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Type</label>
                        </div>
                        <div className="col-75">
                            <select className="select" {...register("loanType", { required: true })} defaultValue={input.loanType}>
                                <option value="">Select...</option>
                                <option value="Federal">Federal</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-75">
                            <select className="select" {...register("subsidized")} defaultValue={input.subsidized}>
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
                            <select className="select" {...register("disbursementMonth", { required: true })} defaultValue={input.disbursementMonth}>
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
                            <input className="input" {...register("disbursementYear", { required: true })} defaultValue={input.disbursementYear} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Lender</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("lender")} defaultValue={input.lender} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Principal</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("principal", { required: true })} defaultValue={input.principal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Current Loan Balance</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("currentLoanBalance")} defaultValue={input.currentLoanBalance} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Interest Rate</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("interestRate")} defaultValue={input.interestRate} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Loan Term</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("loanTerm", { required: true })} defaultValue={input.loanTerm} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Grace Period</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("gracePeriod")} defaultValue={input.gracePeriod} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>How many months of the grace period do you expect to use?</label>
                        </div>
                        <div className="col-75">
                            <input className="input" {...register("gracePeriodUsage")} defaultValue={input.gracePeriodUsage} />
                        </div>
                    </div>

                    <input className="clicky-btn" type="submit" value="Confirm" />

                </form>

            </div>

        </>
    )
}

export default Verify