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

  

  
};
console.log(isValid(testCase4));
