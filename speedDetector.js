const prompt = require("prompt-sync")({ sigint: true });

let currentSpeed = prompt("Please enter the speed of the car: ");
let demeritPoints = 0;

function checkSpeedLimit(userSpeed) {
  const speedLimit = 70;

  if (userSpeed <= speedLimit) {
    return "Ok";
  } else {
    const extraPoints = Math.floor((userSpeed - speedLimit) / 5);
    demeritPoints += extraPoints;
    
    // Check for license suspension before returning any value
    if (demeritPoints >= 12){
      return "License suspended";
    }

    return `Points: ${demeritPoints}`;
  }
}

const race = checkSpeedLimit(parseInt(currentSpeed));
console.log("Great: " + race);