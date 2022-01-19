//Close to correct answer

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var testCase1 = "()";
var testCase2 = "()[]{}";
var testCase3 = "(]";
var testCase4 = "{[]}";
var testCase5 = "]";
var testCase6 = ")(){}";



var isValid = function (s) {

    const key = {
        "(": ")",
        "[": "]",
        "{": "}",
      };
      
      var stack = [];

    if(s.length < 2){
        return false
    }
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(key[s[i]]);
    } else {
      console.log(stack);
      if (stack[stack.length - 1] === key[s[i]]) {
        stack.pop();
        console.log(stack);
      }
    }
  }
  var result = stack.length > 0 ? false : true;
  return result
};
console.log(isValid(testCase4));