/* function odd_Even(myNum) {
  for (let i = 0; i < myNum.length; i++) {
    let number = myNum[i];
    if (number % 2 == 0) {
      console.log("This is even number", number);
    } else if (number % 2 == 1) {
      console.log("This is odd number", number);
    }
  }
}
const num = [11, 13, 17, 15, 27, 37, 47, 19, 211, 22, 23, 24, 25];
odd_Even(num); */

/* function sumAll(num) {
  const addOfAllNum = num.reduce((a, ab) => a + ab, 0);
  console.log(num.length);
}
const allNum = [11, 13, 17, 15, 27, 37, 47, 19, 211, 22, 23, 24, 25];
sumAll(allNum); */

/* function isLeapYear(year) {
  let myYear = year % 4;
  if (myYear == 0) {
    console.log("This is leap year");
  } else {
    console.log("This is not leap year");
  }
  return myYear;
}

isLeapYear(2020);
console.log(isLeapYear());
 */

/* function getAllSum(numbs) {
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    const singleNumb = numbs[i];
    sum += singleNumb;
  }
  return sum;
}
const allNum = [11, 13, 17, 15, 27, 37, 47, 19, 211, 22, 23, 24, 25];
console.log(getAllSum(allNum));

function getOddNumbers(numbs) {
  const oddNumbers = [];
  for (let i = 0; i < numbs.length; i++) {
    const singleNumber = numbs[i];

    if (singleNumber % 2 != 0) {
      oddNumbers.push(singleNumber);
    }
  }
  return oddNumbers;
}
console.log(getOddNumbers(allNum)); */

/* function factorial(num) {
  let sum = 1;
  for (let i = num; i >= 1; i--) {
    sum *= i;
  }
  return sum;
}
console.log(factorial(7)); */

/* function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}
console.log(factorial(7)); */
