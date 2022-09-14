/* 1. Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes. 

function hourToMin(hour) {
  const min = hour * 60;
  return min;
}

const myHour = hourToMin(2);
console.log(myHour); */

/* 2. Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. 

function findLeapYear(year) {
  let leapYear = [];
  for (let i = 0; i < year.length; i++) {
    if ((year[i] % 4 == 0 && year[i] % 100 != 0) || year[i] % 400 == 0) {
      leapYear.push(year[i]);
    }
  }
  return leapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(years)); */

/* 3. Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
 as the input parameter and will return the sum of the odd numbers.

function findOddSum(numbers) {
  let sumOfOdd = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      sumOfOdd += numbers[i];
    }
  }
  return sumOfOdd;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const allOddNumber = findOddSum(myNumbers);
console.log(allOddNumber); */

4. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।