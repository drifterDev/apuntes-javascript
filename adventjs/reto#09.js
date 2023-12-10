// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function adjustLights(lights) {
  const p1='🟢'
  const p2='🔴'
  let last = lights[0]
  let res = 0
  let res2 = 0
  for(let i=1;i<lights.length;i++){
    if(last===lights[i]){
      res++;
    }
    last=(last===p1?p2:p1)
  }
  last = lights[lights.length-1]
  for(let i=lights.length-2;i>=0;i--){
    if(last===lights[i]){
      res2++;
    }
    last=(last===p1?p2:p1)
  }
  return Math.min(res, res2)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)