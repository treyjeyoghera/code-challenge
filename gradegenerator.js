// prompt am asking the user to enter marks that he/she scored in the test
const prompt = require("prompt-sync")({ sigint: true });
// lets ask the scores
const scored = prompt("please enter your score(0-100:)")
// we are now grading the score according to the scores entered

if(scored>=79){
// we are using return so as to get feedback for the score you have entered 
    return ( "you scored an A")
} else if(scored>=60){
    
    return ( "you scored a B"
)}else if(scored>=49){
    
    return ( "you scored a C"
)}else if(scored>=40){
    
    return ( "you scored a D"
)}else{
    
    return ( "you scored an E")
}