// LeetCode 14 Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


const testStr1 = ["flower", "flow", "flight"];
const testStr2 = ["dog", "racecar", "car"];

const longestCommonPrefix = function (strs) {

    var prefix = "";
    var char = "";

    for(i = 0; i < strs[0].length; i++){
        char = strs[0][i];
        //Loop through CHARACTERS of the first word

        for(q = 1; q < strs.length; q++){
            //Starting at the second WORD, check that index letter against the same
            //index letter in the first word
            //If they're not equal, exit loop
            if(strs[q][i] !== char) {
               console.log(prefix) 
               return prefix
            }
        }
        //Otherwise append that character to prefix
        prefix = prefix + char;
    }
    return prefix;
}

longestCommonPrefix(testStr1);