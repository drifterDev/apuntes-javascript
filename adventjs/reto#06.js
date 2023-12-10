// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function maxDistance(movements) {
  let act = 0
  let tmp = 0
  for(let i = 0; i < movements.length; i++){
    if(movements[i] === '>'){
      act++;
    }else if(movements[i] === '<'){
      act--;
    }else{
      tmp++;
    }
  }
  return Math.abs(act)+tmp
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5