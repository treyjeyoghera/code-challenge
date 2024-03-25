// prompt am asking the user to enter marks that he/she marks in the test
const prompt = require("prompt-sync")({ sigint: true });

// lets ask the scores
const marks = prompt("please enter your marks(0-100:) :")
// we are now grading the score according to the scores entered
function grading(marks){
if(marks>=79){
// we are using return so as to get feedback for the score you have entered 
    return ( "you have an A")
} else if(marks>=60){
    
    return ( "you have a B"
)}else if(marks>=49){
    
    return ( "you have a C"
)}else if(marks>=40){
    
    return ( "you have a D"
)}else{
    
    return ( "you have an E")
}}
let grade = grading(marks);
console.log("your grade is:" + grade)