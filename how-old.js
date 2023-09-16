const currentYear = new Date().getFullYear();

const howOld = (age, year) => {
  switch (true) {
    case (year >= currentYear + 1):
      const futureAge = year - currentYear + age;
      return `You will be ${futureAge} in the year ${year}`;
      break;
    case (year < currentYear - age):
      const beforeAge = currentYear - age - year;
      return `The year ${year} was ${beforeAge} years before you were born`;
      break;
    case (year > currentYear - age && year < currentYear):
      const earlyAge = age - (currentYear - year);
      return `You were ${earlyAge} in the year ${year}`;
      break;
    case (year === currentYear):
      return `You are ${age} in the current year of ${year}`;
      break;
    case (year === currentYear - age):
      return `The year ${year} was the year you were born`;
      break;
  
    default:
      return "Error: incorrect age or year";
      break;
  }
};

console.log(howOld(25, 1990));