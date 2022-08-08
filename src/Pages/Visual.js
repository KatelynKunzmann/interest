import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

//global variables
var study;
var salary;
var gradMonth;
var gradDay;
var gradYear;
var numLoans;

var currentDate; 
var gradDate; 
var tempGraceDate;
var tempDisbDate;
var remDaysToGrad;

//helper functions
function readInt(int)
// function for formatting int for user readability
{
	return (Math.round(int)).toLocaleString("en-US")
}

function readDouble(double)
// function for formatting doubles for user readability. rounds to 2 decimal points
{
	return (Math.round(double * 100) / 100).toLocaleString("en-US")
}

function readPercent(decimal)
// function for formatting decimals into percentages for user readability, rounds to 2 decimal
{
	return readDouble(decimal * 100) + "%";
}

function printDate(date, dateName)
{
	/// THIS ISNT ENTIRELY CORRECT BUT GOOD ENOUGH
	this.date = date;
	// this.date.setMonth(this.date.getMonth()+1);
	document.write(dateName + ": " + this.date.toDateString() + "<br />");
	// this.date.setMonth(this.date.getMonth()-1);
}

//main Loan class
class Loan
{
	// IMPORTANT:
	// ALL OF THIS CLASS/OBJECT'S VARIABLES ARE IN THIS CONSTRUCTOR!!!!!!!
	constructor(name, lender, type, fedType, disbMonth, disbDay, disbYear, prin, currBal, loanLength, yearRate, grace, graceUse)
	{
		// Inputs
		this.name = name; // Input G
		this.lender = lender; // Input H
		this.type = type; // Input I
		this.fedType = fedType; // Input J
		this.disbMonth = disbMonth - 1; // TEMPORARY IMPERFECT FIX FOR JS DATE PROBLEM. Input L. Assume that if user puts down 3, they mean March. However, 3 in JS Month means April
		this.disbDay = disbDay; // Input K
		this.disbYear = disbYear; // Input M
		this.prin = prin; // Input N
		this.currBal = currBal; // Input O
		this.loanLength = loanLength; // Input P or Output 5
		this.yearRate = yearRate; // Input Q or Output 3
		this.grace = grace; // Input R
		this.graceUse = graceUse; // Input S

		// Intermediate (Intmd) values <-- THESE MAY NOT BE THEIR REAL VALUES!
		this.remDaysToGrace = 0; // Intmd 6
		this.daysFromDisbToGrad = 0; // Intmd 7
		this.daysFromDisbtoGrace = 0; // Intmd 8
		this.dayRate = this.yearRate / 365; // Intmd 11
		this.loanLengthYears = this.loanLength / 12; // Intmd 12
		this.startMonthForArrMonth = gradMonth; // Intmd 13
		this.startYearForArrYear = gradYear; // Intmd 14
		this.monthInterest = 0; // Intmd 16

		// Outputs. Inputs that are also outputs are NOT reincluded in this code block. Also, for some of these outputs, it doesn't matter what we set them to initially as we will edit their values later in that case
		this.startBal = 0; // Output 2
		this.monthRate = this.yearRate / 12; // Output 4
		this.minPay = 0; // Output 6

		this.arrMonthNum = new Array(this.loanLength + 1); // Output 7a
		this.arrMonth = new Array(this.loanLength + 1); // Output 7b
		this.arrDate = new Array(this.loanLength + 1); // Output 7c
		this.arrYear = new Array(this.loanLength + 1); // Output 7d
		this.arrLastMonthStartBal = new Array(this.loanLength + 1); // Output 7e
		this.arrThisMonthInterest = new Array(this.loanLength + 1); // Output 7f
		this.arrThisMonthBal = new Array(this.loanLength + 1); // Output 7g
		this.arrMinPay = new Array(this.loanLength + 1); // Output 7h
		this.arrThisMonthFinalBal = new Array(this.loanLength + 1); // Output 7i

		this.totalInterestPreGrad = 0; // Output 8
		this.totalInterestPostGrad = 0; // Output 9
		this.totalInterestEntireLoan = 0; // Output 10

		// Intermediate (Intmd) values CONTINUED <-- THESE MAY NOT BE THEIR REAL VALUES!
		this.rollingBalForArr7eAnd7i = this.startBal; // Intmd 15 <-- NOT the correct value. will be corrected later in correctLoanVariables() function
		this.loanSafetyRatio = 0; // Intmd 17
	}

	correctLoanVariables() // call this function once after a Loan object has been created in order to change the variables in this function to their correct values
	{
		// Correcting Intmd 6

		tempGraceDate.setMonth(tempGraceDate.getMonth()+this.graceUse); 

		this.remDaysToGrace = (tempGraceDate.getTime() - currentDate.getTime())/(1000*60*60*24);

		tempGraceDate.setMonth(tempGraceDate.getMonth()-this.graceUse); // Since other loans will depend on the temp grace date being equal to the grad date, I must change it back to the default


		// Correcting Intmd 7

		tempDisbDate.setDate(this.disbDay);
		tempDisbDate.setMonth(this.disbMonth);
		tempDisbDate.setFullYear(this.disbYear);

		this.daysFromDisbtoGrad = (gradDate.getTime() - tempDisbDate.getTime())/(1000*60*60*24);


		// Correcting Intmd 8

		tempGraceDate.setMonth(tempGraceDate.getMonth()+this.graceUse);

		tempDisbDate.setDate(this.disbDay);
		tempDisbDate.setMonth(this.disbMonth);
		tempDisbDate.setFullYear(this.disbYear);

		this.daysFromDisbtoGrace = (tempGraceDate.getTime() - tempDisbDate.getTime())/(1000*60*60*24);

		tempGraceDate.setMonth(tempGraceDate.getMonth()-this.graceUse);


		// Correcting Output 2

		if (this.fedType === 3)
		{
			if (this.currBal === -1)
			{
				this.startBal = this.prin;
			}
			else
			{
				// Do nothing! If we reach this point, it means the user provided  the current balance of a federal SUBsidized loan so the balance will stay that way until graduation, barring fees that we can't account for
			}
			
		}
		else if (this.currBal === -1)
		{
			if (this.graceUse > 0)
			{
				this.startBal = this.prin + (this.prin * this.daysFromDisbtoGrace * this.dayRate);
			}
			else
			{
				this.startBal = this.prin + (this.prin * this.daysFromDisbtoGrad * this.dayRate);
			}
		}
		else
		{
			if (this.graceUse > 0)
			{
				this.startBal = this.currBal + (this.prin * this.remDaysToGrace * this.dayRate);
			}
			else
			{
				this.startBal = this.currBal + (this.prin * remDaysToGrad * this.dayRate);
			}
		}


		// Correcting Intmd 15 (because startBal has been corrected just now)

		this.rollingBalForArr7eAnd7i = this.startBal;


		// Correcting Output 6 (see Amoritzed Loan Formula in pdf)

		// B3 = this.startBal
		// B4 = this.yearRate
		// B5 = this.loanLengthYears

		this.minPay = (this.startBal * this.yearRate/12 * Math.pow((1 + this.yearRate/12),(this.loanLengthYears * 12) )) / ( Math.pow((1 + this.yearRate/12),(this.loanLengthYears * 12)) - 1);


		// Filling the parallel arrays which all have a size of loanLength + 1 (highest index is loanLength)

		// startMonthForArrMonth is set to gradMonth by default. This if statement will only change it to the month of the end of grace period if user uses grace period.
		if (this.graceUse > 0)
		{
			tempGraceDate.setMonth(tempGraceDate.getMonth()+this.graceUse);

			this.startMonthForArrMonth = tempGraceDate.getMonth() + 1; // tempGraceDate will return an int from 0 to 11 which will be the actual human month number - 1 due to JS quirks. Therefore, +1 will give us the actual human month number. Hence, highest possible value for startMonthForArrMonth is 12 while lowest possible is 1.
			this.startYearForArrYear = tempGraceDate.getYear();

			tempGraceDate.setMonth(tempGraceDate.getMonth()-this.graceUse);
		}

		this.startMonthForArrMonth -= 1; // this is for the first iteration of the for loop in order to offset the +1 increment with each for loop iteration

		for (let i = 0; i < this.loanLength + 1; i++)
		{
			this.arrMonthNum[i] = i + 1;
			this.arrDate[i] = gradDay;

			this.startMonthForArrMonth += 1;
			if (this.startMonthForArrMonth > 12)
			{
				this.startMonthForArrMonth = 1;
				this.startYearForArrYear += 1;
			}
			this.arrMonth[i] = this.startMonthForArrMonth;
			this.arrYear[i] = this.startYearForArrYear;

			this.arrLastMonthStartBal[i] = this.rollingBalForArr7eAnd7i;
			this.arrThisMonthInterest[i] = this.rollingBalForArr7eAnd7i * Math.pow((1 + this.dayRate), 30.417) - this.rollingBalForArr7eAnd7i; // formula for this comes from the Excel spreadsheet
			this.arrThisMonthBal[i] = this.arrLastMonthStartBal[i] + this.arrThisMonthInterest[i];
			this.arrMinPay[i] = this.minPay;
			this.arrThisMonthFinalBal[i] = this.arrThisMonthBal[i] - this.minPay;

			this.rollingBalForArr7eAnd7i = this.arrThisMonthFinalBal[i]; // "passing on" this month's final balance by saving it to rollingBal which will be used in the next iteration to set arrLastMonthStartBal[i] to
		}

		if (this.arrThisMonthBal[this.loanLength] < this.arrMinPay[this.loanLength]) // making sure the table ends nicely (no negative values, overpay, underpay etc.)
		{
			this.arrMinPay[this.loanLength] = this.arrThisMonthBal[this.loanLength];
			this.arrThisMonthFinalBal[this.loanLength] = 0;
		}


		// Correcting Output 8

		this.totalInterestPreGrad = this.startBal - this.prin;


		// Correcting Output 9

		for (let i = 0; i < this.loanLength + 1; i++)
		{
			this.totalInterestPostGrad += this.arrThisMonthInterest[i];
		}


		// Correcting Output 10

		this.totalInterestEntireLoan = this.totalInterestPreGrad + this.totalInterestPostGrad;


		// Correcting Intmd 17

		this.loanSafetyRatio = this.startBal / salary * 100; // returns percentage number without the sign
	}
}

function Visual() {
  const location = useLocation();
  const input = location.state;

  study = input.fieldOfStudy;
  salary = input.expectedYearlySalary;

  if (input.expectedGraduationMonth === "January"){
    gradMonth = 0;
  } 
  else if (input.expectedGraduationMonth === "February") {
    gradMonth = 1;
  }
  else if (input.expectedGraduationMonth === "March") {
    gradMonth = 2;
  }
  else if (input.expectedGraduationMonth === "April") {
    gradMonth = 3;
  }
  else if (input.expectedGraduationMonth === "May") {
    gradMonth = 4;
  }
  else if (input.expectedGraduationMonth === "June") {
    gradMonth = 5;
  }
  else if (input.expectedGraduationMonth === "July") {
    gradMonth = 6;
  }
  else if (input.expectedGraduationMonth === "August") {
    gradMonth = 7;
  }
  else if (input.expectedGraduationMonth === "September") {
    gradMonth = 8;
  }
  else if (input.expectedGraduationMonth === "October") {
    gradMonth = 9;
  }
  else if (input.expectedGraduationMonth === "November") {
    gradMonth = 10;
  }
  else {
    gradMonth = 11;
  }

  gradDay = 1; 
  gradYear = input.expectedGraduationYear; 
  numLoans = 1; 

  currentDate = new Date();
  gradDate =  new Date(gradYear, gradMonth, gradDay); 
  tempGraceDate = new Date(gradYear, gradMonth, gradDay); 
  tempDisbDate = new Date(gradYear, gradMonth, gradDay);
  remDaysToGrad = (gradDate.getTime() - currentDate.getTime())/(1000*60*60*24);
  remDaysToGrad = readInt(remDaysToGrad);

  //transforming inputs
  var loanType;
  var subsidized;

  if (input.loanType === "federal") {
    loanType = 1;
    if (input.subsidized === "true") {
      subsidized = 3;
    }
    else {
      subsidized = 4;
    }
  } 
  else {
    loanType = 2;
    subsidized = -1;
  }

  //disbursementMonth
  var disbursementMonth;

  if (input.disbursementMonth === "January"){
    disbursementMonth = 0;
  } 
  else if (input.disbursementMonth === "February") {
    disbursementMonth = 1;
  }
  else if (input.disbursementMonth === "March") {
    disbursementMonth = 2;
  }
  else if (input.disbursementMonth === "April") {
    disbursementMonth = 3;
  }
  else if (input.disbursementMonth === "May") {
    disbursementMonth = 4;
  }
  else if (input.disbursementMonth === "June") {
    disbursementMonth = 5;
  }
  else if (input.disbursementMonth === "July") {
    disbursementMonth = 6;
  }
  else if (input.disbursementMonth === "August") {
    disbursementMonth = 7;
  }
  else if (input.disbursementMonth === "September") {
    disbursementMonth = 8;
  }
  else if (input.disbursementMonth === "October") {
    disbursementMonth = 9;
  }
  else if (input.disbursementMonth === "November") {
    disbursementMonth = 10;
  }
  else {
    disbursementMonth = 11;
  }

  var loan = new Loan(input.loanName,
    input.lender,
    loanType,
    subsidized,
    disbursementMonth,
    1,
    input.disbursementYear,
    input.principal,
    input.currentLoanBalance,
    input.loanTerm,
    input.interestRate / 100,
    input.gracePeriod,
    input.gracePeriodUsage).correctLoanVariables();

    alert(loan);
  
  return (
    <>

    <NavigationBar />
    
    <h1 className="whiteText">Visualization Page</h1>

    <Link className="clicky-btn" to="/form">Evaluate Another Loan</Link>
    </>
  )
}

export default Visual