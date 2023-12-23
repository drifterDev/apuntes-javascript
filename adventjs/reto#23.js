// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function organizeChristmasDinner(dishes) {
  const diccionario={}
  dishes.forEach((dish) => {
    for(let i=1;i<dish.length;i++){
      if (!diccionario[dish[i]]){
        diccionario[dish[i]]=[];
      }
      diccionario[dish[i]].push(dish[0]);
    }
  })
  const res=[]
  Object.keys(diccionario).forEach((clave) => {
    if(diccionario[clave].length>1){
      diccionario[clave].sort()
      res.push([clave, ...diccionario[clave]])
    }
  })
  res.sort()
  return res
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/