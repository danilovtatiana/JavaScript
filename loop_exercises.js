//Use a For Loop to print out the word "hello" 5 times

//while loop


x = 0;

while (x < 5) {
  console.log("hello");

  x++;
}

//for loop

for (var i = 0; i < 5; i++) {
  console.log("hello");
}

//Use loops to print out all odd numbers from 1 to 25

//while loop

num = 1;

while (num < 26) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

//for loop

for (var i = 0; i < 26; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
