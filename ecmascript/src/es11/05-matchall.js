const regex = /\b(kiwi)\b/g;
const passwords = "kiwi, hola, kiwi, sdfjal, wierj, otra vez kiwi";

for (const match of passwords.matchAll(regex)) {
  console.log(match);
}
