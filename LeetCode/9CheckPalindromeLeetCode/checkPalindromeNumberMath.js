//Check if number is palindrome mathmatically

const testNum1 = 124;
const testNum2 = 1221;

var isPalindrome = function (x) {
  
  var num = x;
  var reverse = 0;
  var temp = 0;

  while(num > 0){
    temp = num % 10;
    reverse = ((reverse * 10) + temp);
    num = (num - temp)/10;
  }
  if( x === reverse){
    return true
  }else{
    return false
  }
};

console.log(isPalindrome(testNum1));

