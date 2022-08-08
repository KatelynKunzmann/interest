import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

function Visual() {
  const location = useLocation();
  const input = location.state;
  
  return (
    <>

    <NavigationBar />
    
    <h1>Visualization Page</h1>

    <h2>
      fieldOfStudy: {input.fieldOfStudy}
    </h2>
    
    <h2>
      expectedYearlySalary: {input.expectedYearlySalary}
    </h2>

    <h2>
      expectedMonthlyNetTakeHome: {input.expectedMonthlyNetTakeHome}
    </h2>

    <h2>
    expectedGraduationMonth: {input.expectedGraduationMonth}
    </h2>

    <h2>
    expectedGraduationYear: {input.expectedGraduationYear}
    </h2>

    <h2>
    loanName: {input.loanName}
    </h2>

    <h2>
    loanType: {input.loanType}
    </h2>

    <h2>
    subsidized: {input.subsidized}
    </h2>

    <h2>
    disbursementMonth: {input.disbursementMonth}
    </h2>

    <h2>
    disbursementYear: {input.disbursementYear}
    </h2>

    <h2>
    lender: {input.lender}
    </h2>

    <h2>
    principal: {input.principal}
    </h2>

    <h2>
    currentLoanBalance: {input.currentLoanBalance}
    </h2>

    <h2>
    loanTerm: {input.loanTerm}
    </h2>

    <h2>
    gracePeriod: {input.gracePeriod}
    </h2>

    <h2>
    gracePeriodUsage: {input.gracePeriodUsage}
    </h2>

    <Link className="clicky-btn" to="/form">Evaluate Another Loan</Link>
    </>
  )
}

export default Visual