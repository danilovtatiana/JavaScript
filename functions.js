function hello (){  //simple function
  console.log("hello world!");
}

function helloYou(name){ //function with one parameter
  console.log("Hello "+name);
}

function addNum(num1, num2){ // function with two parameters
  console.log(num1+num2);
}

function helloSomeone(name="David"){ //function with default parameter
  console.log("Hello "+name);
}

function formal(name="Sam", title="Sir"){ //retunr keyword
  return title + " " + name;
}

function timesFive(numInput){ //multiplication function
  //local scope of the function
  var result = numInput * 5;
  return result;
}

//global scope

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func";
  console.log(stuff);
}

fun(); // GLOBAL V Reassign....
console.log(stuff); //GLOBAL STUFF
