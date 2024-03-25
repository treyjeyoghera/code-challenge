const prompt = require("prompt-sync")({ sigint: true });

// Function to validate numeric input
function validateNumericInput(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

// Function to get valid numeric input from the user
function getValidNumericInput(promptMessage) {
  let userInput;
  do {
    userInput = prompt(promptMessage);
  } while (!validateNumericInput(userInput));
  return parseFloat(userInput);
}

// Function to calculate PAYE deductions
function calculatePAYE(grossSalary) {
  let tax = 0;
  if (grossSalary <= 24000) {
    tax = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    tax = 2400 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    tax = 4833 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 800000) {
    tax = 107333 + (grossSalary - 500000) * 0.325;
  } else {
    tax = 184333 + (grossSalary - 800000) * 0.35;
  }
  return tax;
}

// Function to calculate NHIF deductions based on salary range
function calculateNHIF(grossSalary) {
  let nhif = 0;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }
  return nhif;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
  return grossSalary * 0.06;
}

// Function to calculate net salary
function calculateNetSalary(grossSalary) {
  const paye = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);

  const deductions = paye + nhif + nssf;

  const netSalary = grossSalary - deductions;

  return netSalary;
}

// Get valid numeric input for Gross Salary
const grossSalary = getValidNumericInput("Please enter your Gross Salary: ");

// Calculate and display net salary
const netSalary = calculateNetSalary(grossSalary);
console.log("Your net salary is:", netSalary);
