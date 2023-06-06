async function* anotherGenerator() {
  for (let i = 1; i < 6; i++) {
    yield await Promise.resolve(i);
  }
}

console.log("Comenzo");
const other = anotherGenerator();
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
console.log("Termino");
