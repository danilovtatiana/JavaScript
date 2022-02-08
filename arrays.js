//create an array
var contries = ["USA", "Germany", "China"]

//resign elements
contries[2] = "France"

//immutable vs mmutable

//mixed data types

var mixed = [true, 20, "string"]

// Arrays methods
var myArr = ["one", "two", "three"]

//add and remove elements

//remove last item
var lastItem = myArr.pop()

//add one item

myArr.push("new_item") //-> [one, two, new_item]

//array iteration

var arr = ['A','B','C']

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (letter of arr) {
  console.log(letter);
}

for (letter of arr) {
  alert(letter)
}

arr.forEach(alert)
