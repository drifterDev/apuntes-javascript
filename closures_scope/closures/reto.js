function sumWithClosure(firstNum) {
  let otraFuncion = function sumWithClosure2(secondNum = 0) {
    return firstNum + secondNum;
  };
  return otraFuncion;
}

console.log(sumWithClosure(2)(3));
console.log(sumWithClosure(90)());
