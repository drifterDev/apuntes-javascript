// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function checkIsValidCopy(original, copy) {
  let len=original.length
  if(copy.length!=len)return false
  let order=['#', '+', ':', '.', ' ']
  for(let i=0;i<len;i++){
    if(original[i]===copy[i])continue
    const op1=/[a-zA-Z]/.test(original[i])
    const op2=order.includes(copy[i])
    if(op1 && op2)continue
    if(order.includes(original[i]) && op2){
      if(order.indexOf(original[i])<=order.indexOf(copy[i])){
        continue
      }else return false
    }
    if(copy[i]===original[i].toLowerCase())continue
    else return false
  }
  return true
}

console.log(checkIsValidCopy('Santa Claus is coming','sa#ta cl#us is comin#')) // true
console.log(checkIsValidCopy('Santa Claus is coming','p#nt: cla#s #s c+min#')) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:'))