const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject(new Error("Error en el if"));
    }
  });
};

anotherFunction()
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Termino la promesa"));
