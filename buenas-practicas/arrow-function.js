// El return está implícito sino añadimos las llaves.
const getResult = () => "Results";

//Sin arrows functions
let nums = [1, 2, 3];
console.log(nums.map((n) => n * 2));

// Ejemplos del this
const counter = {
  number: 0,
  increase() {
    setInterval(() => console.log(++this.number), 1000);
  },
};

counter.increase(); //> 1 2 3 4 5

const counter2 = {
  number: 0,
  increase() {
    setInterval(function () {
      console.log(++this.number);
    }, 1000);
  },
};

counter2.increase(); //> NaN, NaN, NaN, NaN, NaN

const counter3 = {
  number: 0,
  increase() {
    setInterval(
      function () {
        console.log(++this.number);
      }.bind(this),
      1000
    );
  },
};

counter3.increase(); //> 1 2 3 4 5
