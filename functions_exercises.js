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
