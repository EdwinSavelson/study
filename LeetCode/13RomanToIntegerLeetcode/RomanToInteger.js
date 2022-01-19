//Given a roman numeral, convert it to an integer.

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//Roman numerals are usually written largest to smallest from left to right.
//However, the numeral for four is not IIII.
//Instead, the number four is written as IV.
//Because the one is before the five we subtract it making four.
//The same principle applies to the number nine, which is written as IX.
//There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

const testNum1 = "XIV";
const testNum2 = "LVIII";
const testNum3 = "MCMXCIV";

const key = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  //Turn string into array
  var splitNumerals = s.split("");

  //Convert numeral array into numbers
  var numArray = splitNumerals.map((numeral) => {
    return key[numeral];
  });
  console.log(numArray);

  //See if the digit ahead it is less than itself
  //if it is, subract it from the digit ahead and make itself 0

  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] < numArray[i + 1]) {
      numArray[i + 1] = numArray[i + 1] - numArray[i];
      numArray[i] = 0;
    } else {
      continue;
    }
  }
  console.log(numArray);
  //Sum the digits
  const result = numArray.reduce((sum, currentValue) => sum + currentValue);
  console.log(result);

  return result;
};

romanToInt(testNum1);
romanToInt(testNum2);
romanToInt(testNum3);
