// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function getIndexsForPalindrome(word) {
  if(word.split('').reverse().join('')==word)return []
  const res=[]
  let l=0
  let r=word.length-1
  while(l<r){
    if(word[l]!=word[r])res.push([l, r])
    l++,r--
  }
  if(word.length%2==0 && res.length==1){
    return null
  }else if(res.length>2){
    return null
  }else if(res.length==2){
    const op1=word[res[0][0]]===word[res[1][0]]
    const op2=word[res[0][1]]===word[res[1][1]]
    const op3=word[res[0][1]]===word[res[1][0]]
    const op4=word[res[0][0]]===word[res[1][1]]
    if(op1 && op2){
      return [res[0][0], res[0][1]]
    }else if(op3 && op4){
      return [res[0][0], res[1][0]]
    }else{
      return null
    }
  }else{
    const mitad=Math.floor(word.length/2)
    if(word[res[0][0]]===word[mitad]){
      return [mitad, res[0][1]]
    }else if(word[res[0][1]]===word[mitad]){
      return [res[0][0],mitad]
    }else{
      return null
    }
  }
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null