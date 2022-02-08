// create an object

var carInfo = {make:"Toyota", year: 1990, model:"Camry", carAlert: function(){
  alert("We've got a car here!")
}
};

//object with different data types

var myNewO = {a:"hello", b:[1,2,3],c:{inside:['a','b']}}

//change the values inside the object

carInfo['year'] = 2006;

carInfo['year'] += 1;  //2007

//itereting through an object (for in)
for (key in carInfo){
  console.log(key); //make, year, model
  console.log(carInfo[key]); //values !could be in different order
}

//OBJECT METHODS - functions inside of the objects

var myObj = {
  prop:37,
  reportProp: function () {
    return this.prop;
  }
};
console.log(myObj.reportProp());

var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The myMethod was called");
  }
}

myObject = {
  name: "Jose",
  greet: function(){
    console.log("Hello " + this.name);
  }
}
