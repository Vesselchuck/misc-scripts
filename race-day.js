let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = true;
const runnerAge = 18;

// console.log(raceNumber);
// console.log(regEarly);
// console.log(runnerAge);

switch (runnerAge && regEarly) {
  case (runnerAge > 18 && true):
    raceNumber += 1000;
    console.log(`You will race at 9:30 am. Your number is ${raceNumber}.`);
    break;
  case (runnerAge > 18 && false):
    console.log(`You will race at 11:00 am. Your number is ${raceNumber}.`);
    break;
  case (runnerAge < 18):
    console.log(`You will race at 12:30 pm. Your number is ${raceNumber}.`);
    break
  case (runnerAge === 18):
    console.log(`Please see the registration desk.`);
    break;

  default:
    console.log("Control flow has failed.");
    break;
}