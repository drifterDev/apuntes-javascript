//Valores por defecto
function newUser(name, age) {
  var name = name || "Mateo";
  var age = age || 18;
  console.log(name, age);
}

newUser();
newUser("Diego", 20);

//Valores por defecto
function newAdmin(name = "Mateo", age = 18) {
  console.log(name, age);
}

newAdmin();
newAdmin("Diego", 20);
