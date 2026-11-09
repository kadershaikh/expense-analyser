
// Warmup.js - predict the output BEFORE you run it

// Part A: Hoisting

console.log(a);

var a = 5;

// Part B: Uncomment this line to observe the error
// console.log(b);

let b = 10;

// Part C: Reference vs Copy

const original = [1, 2, 3];

const alias = original;

const copy = [...original];

alias[0] = 99;

console.log(original[0], copy[0]);

// Part D: Closures

function makeCounter() {

  let count = 0;

  return () => {
    count++;
    return count;
  };

}

const next = makeCounter();

next();
next();

console.log(next());

// console.log(0  '0', 0 = '0');
