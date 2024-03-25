// we are asking user to enter input
const prompt = require("prompt-sync")({ sigint: true });

let currentSpeed = prompt("Please enter the speed of the car: ");
let demeritPoints = 0;
// we are creating a function that will enable us to check speedlimit
function checkSpeedLimit(userSpeed) {
  const speedLimit = 70;

  if (userSpeed <= speedLimit) {
    return "Ok";
    //means speed is ok
  } else {
    const extraPoints = Math.floor((userSpeed - speedLimit) / 5);
    demeritPoints += extraPoints;
    return `Points: ${demeritPoints}`;
  }
// we are going to suspend license that gets 12 point aned above
  if (demeritPoints > 12){
    return "license suspended";
  }
}

const race = checkSpeedLimit(parseInt(currentSpeed));
console.log("Great: " + race);