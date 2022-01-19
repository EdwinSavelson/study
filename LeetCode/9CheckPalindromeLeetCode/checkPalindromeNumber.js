// Check if number is Palindrome by converting to string

var testArray = 121;

const checkPalindromeNumber = (int) => {

  var num = int.toString();

  var q = num.length - 1;
  for (i = 0; i < num.length; i++) {
    if (num[i] !== num[q]) {
      console.log(false);
      return false;
    } else if (i + 1 === q || i === q) {
      console.log(true);
      return true;
    } else {
      q--;
    }
  }
};

checkPalindromeNumber(testArray);
