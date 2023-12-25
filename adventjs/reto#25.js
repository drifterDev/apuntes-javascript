// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function travelDistance(map) {
  map=map.split('\n')
  const n=map.length
  const m=map[0].length
  const puntos=[]
  const nums=[
    '1','2','3','4','5',
    '6','7','8','9'
  ]
  let y=0
  let x=0
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(map[i][j]==='S'){
        y=j
        x=i
      }
      if(nums.includes(map[i][j])){
        puntos.push([parseInt(map[i][j]), i,j])
      }
    }
  }
  let res=0
  puntos.sort()
  puntos.forEach(punto => {
    res+=Math.abs(punto[1]-x)+Math.abs(punto[2]-y)
    x=punto[1]
    y=punto[2]
  })
  return res
}


const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2