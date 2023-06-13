"use strict";
function recursiva(nums) {
  if (nums.length != 0) {
    let num = nums[0];
    console.log(num);
    nums.shift();
    return recursiva(nums);
  }
}

recursiva([1, 2, 3, 4, 5]);

//Deep copy
//Copia todos los atributos de los objetos enviados
//Hasta los objetos que son atributos del objeto y así varias veces
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);
  if (subjectIsArray) {
    copySubject = {};
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}
