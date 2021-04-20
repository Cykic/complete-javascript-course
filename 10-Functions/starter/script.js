'use strict';

const arr = [];

const divideby2 = (...num) => {
  const divide = num => {
    arr.push(num / 2);
  };

  num.forEach(divide);
  console.log(arr);
};

divideby2(10, 8, 6, 4, 2);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are not boarding all ${n}passengers`);
    console.log(`There are 3 groups with each 3${perGroup}passengers`);
  },wait + 1000);
  console.log(`Will start boarding in ${wait}Seconds `);
};
