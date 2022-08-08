import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';


function Visual() {
  const location = useLocation();
  const input = location.state;


  var loanName = input.loanName
  var type = input.loanType
  var fedType = input.subsidized
  var disbMonth = input.disbursementMonth
  var disbYear = input.disbursementYear
  var lender = input.lender
  var principal = input.principal
  var currLoanBal = input.currentLoanBalance
  var interestRate = input.interestRate
  var loanTerm = input.loanTerm
  var gracePeriod = input.gracePeriod
  var gracePeriodUsage = input.gracePeriodUsage


  var study = input.fieldOfStudy;
  var salary = input.expectedYearlySalary;
  var expTakeHome = input.expectedMonthlyNetTakeHome;


  var gradMonth = convertMonth(input.expectedGraduationMonth);

  var gradYear = input.expectedGraduationYear;


  /******************************************************/
  /*************** START TABLE CONTENTS *****************/
  /******************************************************/
  const columns = [
    {
      name: 'Year',
      selector: row => row.id,
    },
    {
      name: 'Last Years Balance',
      selector: row => row.lastYearBal,
    },
    {
      name: 'This Years Interest',
      selector: row => row.interest,
    },
    {
      name: 'This Years Balance',
      selector: row => row.currBal,
    },
    {
      name: 'Min Payment per Year',
      selector: row => row.minPay,
    },
    {
      name: 'This Years Final Balance',
      selector: row => row.finalBal,
    },
  ];


  var yearDiff = gradYear - disbYear;
  var remDisbMonths = 12 - convertMonth(disbMonth);
  var monthsToGrad = 12 * (yearDiff - 1) + gradMonth + remDisbMonths;

  var startBal = 0;
  if (fedType == 'Subsidized') {
    startBal = parseInt(principal);
  } else {
    startBal = (monthsToGrad * ((interestRate / 100) / 12 * parseInt(principal)));
    startBal = startBal + parseInt(principal);
  }
  var minPay = (startBal * (interestRate / 100) / 12 * Math.pow((1 + (interestRate / 100) / 12), (loanTerm))) / (Math.pow((1 + (interestRate / 100) / 12), (loanTerm)) - 1);
  minPay = minPay * 12;

  var yearInt1 = startBal * Math.pow((1 + (interestRate / 100) / 365), 365) - startBal;
  var yearBal1 = startBal + yearInt1;
  var minPay1 = minPay;
  if (minPay1 > yearBal1) {
    minPay1 = yearBal1;
  } else if (yearBal1 == 0) {
    minPay1 = 0;
  }
  var finalBal1 = yearBal1 - minPay1;

  var yearInt2 = finalBal1 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal1;
  var yearBal2 = finalBal1 + yearInt2;
  var minPay2 = minPay;
  if (minPay2 > yearBal2) {
    minPay2 = yearBal2;
  } else if (yearBal2 == 0) {
    minPay2 = 0;
  }
  var finalBal2 = yearBal2 - minPay2;

  var yearInt3 = finalBal2 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal2;
  var yearBal3 = finalBal2 + yearInt3;
  var minPay3 = minPay;
  if (minPay3 > yearBal3) {
    minPay3 = yearBal3;
  } else if (yearBal3 == 0) {
    minPay3 = 0;
  }
  var finalBal3 = yearBal3 - minPay3;

  var yearInt4 = finalBal3 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal3;
  var yearBal4 = finalBal3 + yearInt4;
  var minPay4 = minPay;
  if (minPay4 > yearBal4) {
    minPay4 = yearBal4;
  } else if (yearBal4 == 0) {
    minPay4 = 0;
  }
  var finalBal4 = yearBal4 - minPay4;

  var yearInt5 = finalBal4 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal4;
  var yearBal5 = finalBal4 + yearInt5;
  var minPay5 = minPay;
  if (minPay5 > yearBal5) {
    minPay5 = yearBal5;
  } else if (yearBal5 == 0) {
    minPay5 = 0;
  }
  var finalBal5 = yearBal5 - minPay5;

  var yearInt6 = finalBal5 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal5;
  var yearBal6 = finalBal5 + yearInt6;
  var minPay6 = minPay;
  if (minPay6 > yearBal6) {
    minPay6 = yearBal6;
  } else if (yearBal6 == 0) {
    minPay6 = 0;
  }
  var finalBal6 = yearBal6 - minPay6;

  var yearInt7 = finalBal6 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal6;
  var yearBal7 = finalBal6 + yearInt7;
  var minPay7 = minPay;
  if (minPay7 > yearBal7) {
    minPay7 = yearBal7;
  } else if (yearBal7 == 0) {
    minPay7 = 0;
  }
  var finalBal7 = yearBal7 - minPay7;

  var yearInt8 = finalBal7 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal7;
  var yearBal8 = finalBal7 + yearInt8;
  var minPay8 = minPay;
  if (minPay8 > yearBal8) {
    minPay8 = yearBal8;
  } else if (yearBal8 == 0) {
    minPay8 = 0;
  }
  var finalBal8 = yearBal8 - minPay8;

  var yearInt9 = finalBal8 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal8;
  var yearBal9 = finalBal8 + yearInt9;
  var minPay9 = minPay;
  if (minPay9 > yearBal9) {
    minPay9 = yearBal9;
  } else if (yearBal9 == 0) {
    minPay9 = 0;
  }
  var finalBal9 = yearBal9 - minPay9;

  var yearInt10 = finalBal9 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal9;
  var yearBal10 = finalBal9 + yearInt10;
  var minPay10 = minPay;
  if (minPay10 > yearBal10) {
    minPay10 = yearBal10;
  } else if (yearBal10 == 0) {
    minPay10 = 0;
  }
  var finalBal10 = yearBal10 - minPay10;

  var yearInt11 = finalBal10 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal10;
  var yearBal11 = finalBal10 + yearInt11;
  var minPay11 = minPay;
  if (minPay11 > yearBal11) {
    minPay11 = yearBal11;
  } else if (yearBal11 == 0) {
    minPay11 = 0;
  }
  var finalBal11 = yearBal11 - minPay11;

  var yearInt12 = finalBal11 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal11;
  var yearBal12 = finalBal11 + yearInt12;
  var minPay12 = minPay;
  if (minPay12 > yearBal12) {
    minPay12 = yearBal12;
  } else if (yearBal12 == 0) {
    minPay12 = 0;
  }
  var finalBal12 = yearBal12 - minPay12;

  var yearInt13 = finalBal12 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal12;
  var yearBal13 = finalBal12 + yearInt13;
  var minPay13 = minPay;
  if (minPay13 > yearBal13) {
    minPay13 = yearBal13;
  } else if (yearBal13 == 0) {
    minPay13 = 0;
  }
  var finalBal13 = yearBal13 - minPay13;

  var yearInt14 = finalBal13 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal13;
  var yearBal14 = finalBal13 + yearInt14;
  var minPay14 = minPay;
  if (minPay14 > yearBal14) {
    minPay14 = yearBal14;
  } else if (yearBal14 == 0) {
    minPay14 = 0;
  }
  var finalBal14 = yearBal14 - minPay14;

  var yearInt15 = finalBal14 * Math.pow((1 + (interestRate / 100) / 365), 365) - finalBal14;
  var yearBal15 = finalBal14 + yearInt15;
  var minPay15 = minPay;
  if (minPay15 > yearBal15) {
    minPay15 = yearBal15;
  } else if (yearBal15 == 0) {
    minPay15 = 0;
  }
  var finalBal15 = yearBal15 - minPay15;

  var loanSafetyRatio = startBal / salary * 100;
  loanSafetyRatio = readDouble(loanSafetyRatio);
  var safetyColor = 'red';
  var safetyMsg = 'Based upon your salary, you WILL NOT be able to pay back this loan'
  if (loanSafetyRatio < 35) {
    safetyColor = 'green';
    safetyMsg = 'Based upon your salary, you WILL be able to pay back this loan'
  } else if (loanSafetyRatio < 70) {
    safetyColor = 'yellow';
    safetyMsg = 'Based upon your salary, you SHOULD be able to pay back this loan'
  }

  const data = [

    {
      id: 1,
      lastYearBal: readDouble(startBal),
      interest: readDouble(yearInt1),
      currBal: readDouble(yearBal1),
      minPay: readDouble(minPay1),
      finalBal: readDouble(finalBal1),
    },
    {
      id: 2,
      lastYearBal: readDouble(finalBal1),
      interest: readDouble(yearInt2),
      currBal: readDouble(yearBal2),
      minPay: readDouble(minPay2),
      finalBal: readDouble(finalBal2),
    },
    {
      id: 3,
      lastYearBal: readDouble(finalBal2),
      interest: readDouble(yearInt3),
      currBal: readDouble(yearBal3),
      minPay: readDouble(minPay3),
      finalBal: readDouble(finalBal3),
    },
    {
      id: 4,
      lastYearBal: readDouble(finalBal3),
      interest: readDouble(yearInt4),
      currBal: readDouble(yearBal4),
      minPay: readDouble(minPay4),
      finalBal: readDouble(finalBal4),
    },
    {
      id: 5,
      lastYearBal: readDouble(finalBal4),
      interest: readDouble(yearInt5),
      currBal: readDouble(yearBal5),
      minPay: readDouble(minPay5),
      finalBal: readDouble(finalBal5),
    },
    {
      id: 6,
      lastYearBal: readDouble(finalBal5),
      interest: readDouble(yearInt6),
      currBal: readDouble(yearBal6),
      minPay: readDouble(minPay6),
      finalBal: readDouble(finalBal6),
    },
    {
      id: 7,
      lastYearBal: readDouble(finalBal6),
      interest: readDouble(yearInt7),
      currBal: readDouble(yearBal7),
      minPay: readDouble(minPay7),
      finalBal: readDouble(finalBal7),
    },
    {
      id: 8,
      lastYearBal: readDouble(finalBal7),
      interest: readDouble(yearInt8),
      currBal: readDouble(yearBal8),
      minPay: readDouble(minPay8),
      finalBal: readDouble(finalBal8),
    },
    {
      id: 9,
      lastYearBal: readDouble(finalBal8),
      interest: readDouble(yearInt9),
      currBal: readDouble(yearBal9),
      minPay: readDouble(minPay9),
      finalBal: readDouble(finalBal9),
    },
    {
      id: 10,
      lastYearBal: readDouble(finalBal9),
      interest: readDouble(yearInt10),
      currBal: readDouble(yearBal10),
      minPay: readDouble(minPay10),
      finalBal: readDouble(finalBal10),
    },
    {
      id: 11,
      lastYearBal: readDouble(finalBal10),
      interest: readDouble(yearInt11),
      currBal: readDouble(yearBal11),
      minPay: readDouble(minPay11),
      finalBal: readDouble(finalBal11),
    },
    {
      id: 12,
      lastYearBal: readDouble(finalBal11),
      interest: readDouble(yearInt12),
      currBal: readDouble(yearBal12),
      minPay: readDouble(minPay12),
      finalBal: readDouble(finalBal12),
    },
    {
      id: 13,
      lastYearBal: readDouble(finalBal12),
      interest: readDouble(yearInt13),
      currBal: readDouble(yearBal13),
      minPay: readDouble(minPay13),
      finalBal: readDouble(finalBal13),
    },
    {
      id: 14,
      lastYearBal: readDouble(finalBal13),
      interest: readDouble(yearInt14),
      currBal: readDouble(yearBal14),
      minPay: readDouble(minPay14),
      finalBal: readDouble(finalBal14),
    },
    {
      id: 15,
      lastYearBal: readDouble(finalBal14),
      interest: readDouble(yearInt15),
      currBal: readDouble(yearBal15),
      minPay: readDouble(minPay15),
      finalBal: readDouble(finalBal15),
    },
  ];
  /******************************************************/
  /**************** END TABLE CONTENTS ******************/
  /******************************************************/


  return (
    <>

      <NavigationBar />
      <main>
        <h1>{loanName} Visualization</h1>
        <section>
          <div className="loanInfo">
            <div className="boxed">
              <h2 style={{ textAlign: "center", textDecoration: "underline", textDecorationThickness: "10%" }}>
                Information you entered for {loanName}
              </h2>
              <p>Field of Study: {study}</p>

              <p>Yearly Salary: ${readDouble(salary)}</p>

              <p>Monthly Net Take-Home Pay: ${readDouble(expTakeHome)}</p>

              <p>Month of Graduation: {input.expectedGraduationMonth}</p>

              <p>Year of Graduation: {gradYear}</p>

              {/* <p>Loan Name: {input.loanName}</p> */}

              <p>Loan Type: {type}</p>

              <p>Subsidized or Unsubsidized: {fedType}</p>

              <p>Loan Disbursement Month: {disbMonth}</p>

              <p>Loan Disbursement Year: {disbYear}</p>

              <p>Lender: {lender}</p>

              <p>Principal: ${readDouble(principal)}</p>

              <p>Current Loan Balance: ${readDouble(currLoanBal)}</p>

              <p>Interest Rate: {interestRate}%</p>

              <p>Loan Term: {loanTerm} months</p>

              <p>Grace Period: {gracePeriod} months</p>

              <p>Grace Period Usage: {gracePeriodUsage} months</p>

              <div style={{ color: safetyColor }}>
                <p>Loan Safety Ratio: {loanSafetyRatio}% </p>
                <p>-{safetyMsg}</p>
              </div>
            </div>
          </div>

          <div className="table">
            <DataTable
              title={'Amortization Schedule'}
              columns={columns}
              data={data}
            />
          </div>
        </section>

      </main>
      <div>
      </div>
      <div style={{ width: "100%" }}>
        <Link className="clicky-btn" to="/form">Evaluate Another Loan</Link>
      </div>

    </>
  )
}
/******************************************************/
/****************** END VISUAL FCN ********************/
/******************************************************/

// Helper functions
function convertMonth(disbursementMonth) {
  //disbursementMonth
  if (disbursementMonth === "January") {
    disbursementMonth = 1;
  }
  else if (disbursementMonth === "February") {
    disbursementMonth = 2;
  }
  else if (disbursementMonth === "March") {
    disbursementMonth = 3;
  }
  else if (disbursementMonth === "April") {
    disbursementMonth = 4;
  }
  else if (disbursementMonth === "May") {
    disbursementMonth = 5;
  }
  else if (disbursementMonth === "June") {
    disbursementMonth = 6;
  }
  else if (disbursementMonth === "July") {
    disbursementMonth = 7;
  }
  else if (disbursementMonth === "August") {
    disbursementMonth = 8;
  }
  else if (disbursementMonth === "September") {
    disbursementMonth = 9;
  }
  else if (disbursementMonth === "October") {
    disbursementMonth = 10;
  }
  else if (disbursementMonth === "November") {
    disbursementMonth = 11;
  }
  else {
    disbursementMonth = 12;
  }
  return disbursementMonth;
}

function readDouble(double)
// function for formatting doubles for user readability. rounds to 2 decimal points
{
  return (Math.round(double * 100) / 100).toLocaleString("en-US")
}




export default Visual

