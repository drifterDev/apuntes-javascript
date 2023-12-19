// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function revealSabotage(store) {
  const n=store.length
  const m=store[0].length
  const movesX=[-1,0,1,1,1,0,-1,-1]
  const movesY=[1,1,1,0,-1,-1,-1,0]
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(store[i][j]==='*')continue
      else{
        store[i][j]=0
        for(let k=0;k<8;k++){
          let y=movesY[k];
          let x=movesX[k];
          if(i+x<0 || i+x>=n)continue
          if(j+y<0 || j+y>=m)continue
          if(store[i+x][j+y]==='*'){
            store[i][j]++
          }
        }
      }
      store[i][j]=String(store[i][j])
      if(store[i][j]==='0')store[i][j]=' '
    }
  }
  return store
}


const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/