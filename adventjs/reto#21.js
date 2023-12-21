// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function findBalancedSegment(message) {
  let res=0
  let l=0
  let r=0
  for(let i=0;i<message.length;i++){
    let uno=0
    let cero=0
    for(let j=i;j<message.length;j++){
      if(message[j]===1)uno++
      else cero++
      if(uno===cero && j-i>res){
        res=j-i
        l=i
        r=j
      }
    }
  }
  if(res===0)return []
  return [l,r]
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]))
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no hay segmentos equilibrados: []