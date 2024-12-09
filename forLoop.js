//  for loop = repeat some code a limited amount of times

for (let i = 0; i <= 10; i++) {
  // the loop will start at 0, continue up until it reaches 10, adding 1 by 1.
  console.log(i);
}

//  ---------------------------  //

for (let b = 1; b <= 20; b++) {
  if (b == 13) {
    continue; // this will skip the number 13
  } else {
    console.log(b);
  }
}

//  ---------------------------  //

for (let f = 1; f <= 20; f++) {
  if (f == 5) {
    break; // this will stop the loop when it reaches the number 5
  } else {
    console.log(f);
  }
}
