"use strict";
var greetVar = "Hello";
(function () {
  console.log(greetVar);
  var greetVar = "Hi";
  console.log(greetVar);
})();

greet(); //Hello world!

function greet() {
  let greeting = "Hello world!";
  console.log(greeting);
}
