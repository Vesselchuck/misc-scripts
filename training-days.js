const athleteName = "Nala"
const athleteName2 = "Warren";

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

const sportEvent = getRandEvent();
const sportEvent2 = getRandEvent();

const getTrainingDays = sportEvent => {
  let days;
  if (sportEvent === "Marathon") {
    days = 50;
  } else if (sportEvent === "Triathlon") {
    days = 100;
  } else if (sportEvent === "Pentathlon") {
    days = 200;
  }

  return days;
};

const days = getTrainingDays(sportEvent);
const days2 = getTrainingDays(sportEvent2);

const logEvent = (athleteName, sportEvent) => {
  console.log(`${athleteName}'s event is: ${sportEvent}`);
};

const logTime = (athleteName, days) => {
  console.log(`${athleteName}'s time to train is: ${days} days`);
};

logEvent(athleteName, sportEvent);
logTime(athleteName, days);

logEvent(athleteName2, sportEvent2);
logTime(athleteName2, days2);