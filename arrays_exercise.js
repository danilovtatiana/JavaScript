// create empty student roster array

var roster = []

//create the functions for the tasks

//ADD A NEW STUDENT

//Create a function called addNew that takes is a name and uses .push to add a new student to the array

function addNew(){
  var newName = prompt("What name would you like to add?")
   roster.push(newName)
}

//REMOVE THE STUDENT

//Create a function called remove that takes in a name, finds its index location and then removes the name from the roster

function remove(){
  var remName = prompt("What name would you like to remove?")
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}
//DISPLAY ROSTER

//Create a function called display that prints out the roster to the console

function display(){
  console.log(roster);
}

//start by asking if they want to use the web app

var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";

if (start === 'y') {
  while (request !== "quit") {
    request = prompt ("Please select an action: add, remove, display or quit.")
    if (request === 'add') {
      addNew();
    }else if (request === 'display') {
      display();
    }else if (request === 'remove') {
      remove();
    }else {
      alert("Not recognized")
    }
  }
}
alert("Thanks for using the Web App! Please refresh to start over!")
