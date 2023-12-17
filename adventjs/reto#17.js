// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function optimizeIntervals(intervals) {
  intervals=intervals.sort((a, b)=>a[0]-b[0]);
  let l=intervals[0][0]
  let r=intervals[0][1]
  const res=[]
  for(let i=1;i<intervals.length-1;i++){
    if(r>=intervals[i][1]){
      continue
    }else if(r<intervals[i][0]){
      res.push([l,r])
      l=intervals[i][0]
      r=intervals[i][1]
    }else{
      r=Math.max(r, intervals[i][1])
    }
  }
  const n=intervals.length
  if(r<intervals[n-1][0]){
    res.push([l,r])
    l=intervals[n-1][0]
    r=intervals[n-1][1]
  }else if(r>=intervals[n-1][0]){
    r=Math.max(r, intervals[n-1][1])
  }
  res.push([l,r])
  return res
}


console.log(optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]]))
// 1,5, 6,10, 11, 15, 16,20

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]
