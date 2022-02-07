//Problem 1: SLEEP IN

//Write a function called sleepIn that takes in two boolean parameters: weekday and vacation

//The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
//We sleep in if it is not a weekday or we are on vacation. Return true if we sleep in.

// 1st variant
function sleepIn(weekday, vacation){
  if ((weekday !== true) || (vacation == true)) {
    return true
  }else {
    return false
  }
}

//2nd

function sleepIn(weekday, vacation) {
  return (!weekday || vacation)
}

//Problem 2: MONKEY TROUBLE

//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
//each is smiling. We are arein trouble if they are both smiling or if neither of them
//is smiling. Return true if we are in trouble.

function monkeyTrouble(aSmile,bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

//Problem 3: STRING TIMES

//Given a string and a non-negative int n, return a larger string that is n copies of the original string.

function stringTimes(str,n) {
  var returnStr = "";
  var i = 0;
  while (i < n) {
    returnStr += str
    i++
  }
  return returnStr
}
