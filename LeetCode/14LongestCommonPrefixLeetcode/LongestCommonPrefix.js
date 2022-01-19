

// -----------INCORRECT ATTEMPT-------------

const testStr1 = ["flower", "flow", "flight"];
const testStr2 = ["dog", "racecar", "car"];

const longestCommonPrefix = function (strs) {
  var prefix = "";
  var checkingLetter = "";
  var q = 0;
  var j = 0;
  var checking = true;

  while (checking) {
    for (i = 0; i < strs.length; i++) {
      checkingLetter = strs[j][q];
      console.log(i, q, strs[i][q], prefix);
      if (strs[i][q] !== checkingLetter) {
        console.log("letters not the same");
        checking = false;
        break;
      } else if (strs[i][q] === undefined) {
        console.log("short word");
        checking = false;
        return prefix;
      } else {
         //TODO CHECK IF LETTER BEFORE IN PREFIX IS THE SAME THEN CONCAT
        if(prefix[prefix.length-1] !== checkingLetter){
          prefix = prefix.concat(checkingLetter);
          console.log(prefix);
        }else{
          continue
        }
      }
    }
    j++;
    q++;
  }
  console.log(prefix);
  return prefix;
};

longestCommonPrefix(testStr1);
