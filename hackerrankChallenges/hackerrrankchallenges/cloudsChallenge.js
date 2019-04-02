let c = [0, 0, 1, 0, 0, 1, 0];
let c2 = [0, 0, 0, 0, 1, 0];
let numberOfSteps = 0;

for (let i = 0; i < c.length - 1;) {
  numberOfSteps++;
  if (c[i + 2] === 0) {
    i = i + 2;
  } else {
    i = i + 1;
  }
}
console.log(numberOfSteps);