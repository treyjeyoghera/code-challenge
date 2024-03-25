// here we are requesting some users input
const year_tax =prompt(`enter year your were taxed`)
const payment_period =prompt(`enter payment period`)
const disability =prompt(`are you disabled`)
const havemortgage =prompt(`have a mortgage`)
const lifeinsurance =prompt(`do you have a life insurance`)
//we are going to calculate tax
// Function calculate tax

function calculateMonthlyTax(salary) {
    if (salary <= 24000) {
      return salary * 0.10;
    } else if (salary > 24000 && salary <= 32333) {
      return 2400 + (salary - 24000) * 0.25;
    } else if (salary > 32333 && salary <= 500000) {
      return 4833 + (salary - 32333) * 0.30;
    } else if (salary > 500000 && salary <= 800000) {
      return 121333 + (salary - 500000) * 0.325;
    } else {
      return 211333 + (salary - 800000) * 0.35;
    }
  }





// Function to calculate NHIF deductions
function calculateNHIF(salary) {
    if (salary <= 5999) {
      return 150;
    } else if (salary > 5999 && salary <= 7999) {
      return 300;
    } else if (salary > 7999 && salary <= 11999) {
      return 400;
    } else if (salary > 11999 && salary <= 14999) {
      return 500;
    } else if (salary > 14999 && salary <= 19999) {
      return 600;
    } else if (salary > 19999 && salary <= 24999) {
      return 750;
    } else if (salary > 24999 && salary <= 29999) {
      return 850;
    } else if (salary > 29999 && salary <= 34999) {
      return 900;
    } else if (salary > 34999 && salary <= 39999) {
      return 950;
    } else if (salary > 39999 && salary <= 44999) {
      return 1000;
    } else if (salary > 44999 && salary <= 49999) {
      return 1100;
    } else if (salary > 49999 && salary <= 59999) {
      return 1200;
    } else if (salary > 59999 && salary <= 69999) {
      return 1300;
    } else if (salary > 69999 && salary <= 79999) {
      return 1400;
    } else if (salary > 79999 && salary <= 89999) {
      return 1500;
    } else if (salary > 89999 && salary <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
  // Function to calculate NSSF deductions
function calculateNSSF(salary) {
    return salary * 0.06;
  }
  //calculate netsalary
  function calculateNetSalary(salary, benefits) {
    let grossSalary = salary + benefits;
    let tax = calculateMonthlyTax(grossSalary);
    let nhifDeductions = calculateNHIF(salary);
    let nssfDeductions =calculateNSSF(salary);
    let netSalary = grossSalary - calculateMonthlyTax - calculateNHIF- calculateNSSF;
    return netSalary;
  }
  