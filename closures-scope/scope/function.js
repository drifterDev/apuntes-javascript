function greeting() {
  let userName = "Mateo";
  console.log(userName);

  if (userName === "Mateo") {
    console.log("Hello " + userName);
  }
}

greeting();
//No se puede accer a userName porque es funtion scope
// console.log(userName);
