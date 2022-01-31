var firstName = prompt("What is your First Name?");
var lastName = prompt("What is your Last Name?");
var age = prompt("How old are you?");
var height = prompt("What is your height?");
var pet = prompt("What is your pet's name?");

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//NAME CONDITION

if (firstName[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

//AGE CONDITION

if (age >= 20 && age <=30) {
  ageCond = true
}else {
  ageCond = false;
}

//HEIGHT CONDITION

if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

//PET NAME CONDITION

if (pet[pet.length-1] === "y") {
  petCond = true;
}else {
  petCond = false;
}

//ALL CONDITIONS

if (nameCond && ageCond && heightCond && petCond) {
  console.log("You are a Spy!");
} else {
  console.log("You are not a Spy!");
}
