//MY ATTEMPT
//Close but I didn't use a stack and tried to do it by index number

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var testCase1 = "()";
var testCase2 = "()[]{}";
var testCase3 = "(]";
var testCase4 = "{[]}[]";

var key = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function (s) {
  
  var checkingIndex = null;
  for (i = 0; i < s.length; i++) {
   

    // key[s[i] is the value pair of whatever index s is currently at.  
    // example: key[s[0]] for "()"; is the opposite of index 0 ")"
    // s.indexOf(key[s[i]]) is the first index that matches corresponding key to s[i];

    if(s.indexOf(key[s[i]]) === -1){
        if(i !== s.length){
            checkingIndex = null
        }else{
            undefined
        }
    }else{
        checkingIndex = s.indexOf(key[s[i]]) + 1;
    }

    if (checkingIndex - i !== 1 && ((checkingIndex - i) % 2) !== 0) {
            return false;
    } else if(checkingIndex === null){
        continue
    }
  }
  return true
};

console.log(isValid(testCase4));
