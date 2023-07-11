var a; //Declaracion
var b = "b"; //Declaracion y asignacion
b = "a"; //reasignacion
var a = "aa"; //redeclaracion

//Global scope
//En cualquier parte del codigo podemos acceder a estas
var fruta = "mango";

function bestFruta() {
  console.log(fruta);
}

bestFruta();

function countries() {
  country = "Colombia";
  console.log(country); //Como no la declaramos pasa a ser global
}

countries();
console.log(country);
