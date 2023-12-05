// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function cyberReindeer(road, time) {
  const res = [road]
  let actual = 1
  let last = '.'
  let tmp = ''
  while (actual < time){
    if (actual == 5){
      for (let i = 0; i < road.length; i++){
        if (road[i] === '|'){
          road = road.slice(0, i) + '*' + road.slice(i + 1)
        }
      }
    }
    for (let i = 0; i < road.length - 1; i++){
      if (road[i] === 'S' && road[i+1] !== '|'){
        tmp = road[i+1]
        road = road.slice(0,i) + last + 'S' + road.slice(i+2)
        last = tmp
        break
      }
    }
    res.push(road)
    actual++;
  }
  return res
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/