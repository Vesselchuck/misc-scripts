// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (array = []) => {
  const sumArr = [];

  for (let index = array.length - 1; index >= 0; index--) {
    const validation = array[index];
    // console.log(validation);
    if (array.length % 2 === 0) {
      switch (true) {
        case index % 2 !== 0:
          // console.log(validation);
          sumArr.unshift(validation);
          // console.log(sumArr);
          break;
        case index % 2 === 0:
          const doubledNum = validation * 2;
          // console.log(doubledNum);
          if (doubledNum > 9) {
            const subtractedNum = doubledNum - 9;
            // console.log(doubledNum);
            // console.log(subtractedNum);
            sumArr.unshift(subtractedNum);
          } else {
            sumArr.unshift(doubledNum);
          }
          // console.log(sumArr);
        break;
  
        default:
          break;
      }
    } else if (array.length % 2 !== 0) {
      switch (true) {
        case index % 2 === 0:
          // console.log(validation);
          sumArr.unshift(validation);
          // console.log(sumArr);
          break;
        case index % 2 !== 0:
          const doubledNum = validation * 2;
          // console.log(doubledNum);
          if (doubledNum > 9) {
            const subtractedNum = doubledNum - 9;
            // console.log(doubledNum);
            // console.log(subtractedNum);
            sumArr.unshift(subtractedNum);
          } else {
            sumArr.unshift(doubledNum);
          }
          // console.log(sumArr);
        break;
  
        default:
          break;
      }
    }
  }

  // console.log(sumArr);
  sum = sumArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  // console.log(sum);
  
  switch (true) {
    case sum % 10 === 0:
      return true;
      break;
  
    default:
      return false;
      break;
  }
};

const findInvalidCards = (array = []) => {
  const invalidCards = [];

  for (let index = 0; index < array.length; index++) {
    const checker = array[index];
    // console.log(validateCred(array));
    switch (true) {
      case validateCred(checker) === false:
        invalidCards.push(index)
        break;
    
      default:
        break;
    }
  }

  // console.log(invalidCards);
  return invalidCards;
};

const removeDuplicates = (array = []) => {
  return [...new Set(array)];
};

const idInvalidCardCompanies = (array = []) => {
  const invalidCardsIndex = findInvalidCards(array);

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    switch (true) {
      case element.shift() === 3:
        invalidCardsIndex[index] = "Amex";
        break;
      case element.shift() === 4:
        invalidCardsIndex[index] = "Visa";
        break;
      case element.shift() === 5:
        invalidCardsIndex[index] = "Mastercard";
        break;
      case element.shift() === 6:
        invalidCardsIndex[index] = "Discover";
        break;
    
      default:
        invalidCardsIndex[index] = "Company not found";
        break;
    }
  }

  const faultyCompanies = removeDuplicates(invalidCardsIndex);
  return faultyCompanies;
};

const cardStringToArray = (string) => {
  const numArray = [];

  for (let index = 0; index < string.length; index++) {
    let element = string[index];
    if (element !== " ") {
      element = parseInt(element);
      numArray.push(element);
    };
  }
  
  // console.log(numArray);

  return numArray;
};

const newArray = cardStringToArray("4539 6779 0801 6808");

console.log(newArray);

console.log(validateCred(newArray));