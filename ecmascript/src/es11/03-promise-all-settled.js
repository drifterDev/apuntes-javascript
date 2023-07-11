const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));
//Evalua cada una de las promesas que le pasamos en un array
Promise.allSettled([promise1, promise2, promise3]).then((Response) =>
  console.log(Response)
);
