const promise1 = new Promise((resolve, reject) => reject("Reject1"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve2"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve3"));
//Agarra la primera promesa que sea sactisfactoria
Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
