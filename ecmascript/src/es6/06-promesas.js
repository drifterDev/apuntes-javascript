const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups");
    }
  });
};

anotherFunction()
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err));
