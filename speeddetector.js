//we are going to get speed of the vehicle by asking the user to enter it
const prompt = require("prompt-sync")({ sigint: true });
// we are using prompt so as to allow user to interact with the compute (to allow him enter in put)
const speed = prompt("please enter your speed")
// we are creating a function which wil enable us to check the points that one will get
function  checkspeedlimit(speed){
    const speedlimit = 70;
    // we have made that speedlimit const so that it does not chage whe someone enters the speed
    const points_due_to_penalty= math.floor((speed-speedlimit)/5)
    // we are importing math formular to enable us to get the points by subtracting speed and speed limit then divid  the ecxess speed by 5 so as to know the point gained 
    if (speed <= speedLimit) {
        console.log('Ok');
        // it means speed is ok
      } else if (points_due_to_penalty <= 12) {
        console.log(`Points: ${points_due_to_penalty}`);
      }   // Output the total number of demerit points

      else {
        console.log('License suspended');
      }
}