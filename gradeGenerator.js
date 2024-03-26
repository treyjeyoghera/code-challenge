const prompt = require("prompt-sync")({ sigint: true });

// Ask the user to enter their marks
let marks;
do {
    marks = parseInt(prompt("Please enter your marks (0-100): "));
    if (marks > 100) {
        console.log("Invalid input. Marks cannot be greater than 100.");
    }
} while (isNaN(marks) || marks < 0 || marks > 100);

// Function to grade the score according to the marks entered
function grading(marks) {
    if (marks >= 80) {
        return "You have an A";
    } else if (marks >= 60) {
        return "You have a B";
    } else if (marks >= 50) {
        return "You have a C";
    } else if (marks >= 40) {
        return "You have a D";
    } else {
        return "You have an E";
    }
}

// Get the grade and print it
let grade = grading(marks);
console.log("Your grade is: " + grade);
