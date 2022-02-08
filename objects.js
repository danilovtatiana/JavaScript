// create an object

var carInfo = {make:"Toyota", year: 1990, model:"Camry"}

//object with different data types

var myNewO = {a:"hello", b:[1,2,3],c:{inside:['a','b']}}

//change the values inside the object

carInfo['year'] = 2006;

carInfo['year'] += 1;  //2007

//itereting through an object (for in)
for (key in carInfo){
  console.log(key); //make, year, model
  console.log(carInfo[key]);
}
