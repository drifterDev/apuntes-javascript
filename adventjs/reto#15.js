// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function autonomousDrive(store, movements) {
  const n=store.length
  const m=store[0].length
  let x=0
  let y=0
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(store[i][j]==='!'){
        x=j
        y=i
      }
    }
  }
  store[y]=store[y].slice(0, x) + '.' + store[y].slice(x + 1)
  movements.forEach(move => {
    if(move==='R' && x!==m-1){
      if(store[y][x+1]==='.'){
        x++
      }
    }else if(move==='L' && x!==0){
      if(store[y][x-1]==='.'){
        x--
      }
    }else if(move==='D' && y!==n-1){
      if(store[y+1][x]==='.'){
        y++
      }
    }else if(move==='U' && y!==0){
      if(store[y-1][x]==='.'){
        y--
      }
    }
  })
  store[y]=store[y].slice(0, x) + '!' + store[y].slice(x + 1)
  return store
}


const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.