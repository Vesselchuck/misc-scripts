const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 8;
      break;
  
    default:
      return "Error: unknown day.";
      break;
  }
};

// console.log(getSleepHours("Wednesday"));

const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");

// console.log(getActualSleepHours());

const getIdealSleepHours = (hours = 8) => {
  return hours * 7;
};

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  switch (true) {
    case (actualSleepHours === idealSleepHours):
      console.log("You have got the perfect amount of sleep.");
      break;
    case (actualSleepHours > idealSleepHours):
      console.log(`You have got more sleep than needed. You are currently ${actualSleepHours - idealSleepHours} hours over your ideal sleep.`);
      break;
    case (actualSleepHours < idealSleepHours):
      console.log(`You should get some rest. You are currently ${idealSleepHours - actualSleepHours} hours under your ideal sleep.`);
      break;
  
    default:
      return "Error: incalculable sleep debt.";
      break;
  }
};

calculateSleepDebt();