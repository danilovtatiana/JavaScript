var hot = false;
var temp = 50;

if (temp > 80) {
  console.log("Hot Outside!");
}else if (temp <= 80 && temp >= 50) {
  console.log ("Average temp Outside!");
}else if (temp < 50 && temp >= 32) {
  console.log("It's pretty cold out!");
} else {
  console.log("it is very cold out");
}
