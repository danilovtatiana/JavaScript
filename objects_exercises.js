var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){  //Problem 1
    console.log(this.name.length - 1);
  },
  report: function(){
    alert("Name is "+ this.name + ", Job is " + this.job + ", Age is " + this.age)
  }
}

//add a method called  nameLength that prints out the name of the employees name to the console.


//write program that will create an Alert in the browser of each of the object's
//values for the key value pairs. For example, it should alert:
//Name is John Smith, Job is Programmer, Age is 31
