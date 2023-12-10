// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function decode(message) {
  const ind1 = []
  const pares = []
  for (let i = 0; i < message.length; i++){
    if (message[i] === '('){
      ind1.push(i)
    } else if (message[i] === ')'){
      pares.push([ind1[ind1.length-1], i])
      ind1.pop()
    }
  }
  pares.forEach(element => {
    const l = element[0];
    const r = element[1];
    const tmp = message.substring(l, r + 1);
    const tmp2 = tmp.split('').reverse().join('');
    message = message.substring(0, l) + tmp2 + message.substring(r + 1);
  })
  let res = ""
  for (let i = 0; i < message.length; i++){
    if (message[i] === ')' || message[i] === '('){
      continue
    }
    res = res + message[i]
  }
  return res
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus