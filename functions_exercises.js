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

//Problem 4: LUCKY SUM

//Given 3 numerical values, a b c, return their sum. However is one of the value
// 13 then it does not count towards the sum and values to its right do not count.
//So for example, if b is 13, then both b and c do not count


function luckySum(a,b,c){
  if (a === 13) {
    return 0
  }else if (b === 13) {
    return a
  }else if (c === 13) {
    return a + b
  }else {
    return a+b+c
  }
}

//Problem 5:

//You are driving a little too fast, and a police officer stops you. Write code
// to compute the result, encoded as an int value: 0 = no ticket, 1 = small ticket,
// 2 = big ticket. If speed is 60 or less, the result is 0. If speed is between 60 and 80 inclusive
//the result is 1. If speed is 81 and more the result is 2.
//Unless it is your birthday -- on that day, your speed could be 5 higher in all cases

function caught_speeding(speed,is_birthday){
  if (is_birthday) {
    speed -= 5
  }
  if (speed <= 60) {
    return 0
  }else if ((speed > 60) && (speed <= 80)) {
    return 1
  }else {
    return 2
  }
}
