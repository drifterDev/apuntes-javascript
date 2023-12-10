// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function findNaughtyStep(original, modified) {
  if (original.length === modified.length){
    return ''
  } else {
    const flag = original.length > modified.length
    for (let i = 0; i < Math.min(original.length, modified.length); i++){
      if (original[i] !== modified[i] && flag){
        return original[i]
      }else if (original[i] !== modified[i] && !flag){
        return modified[i]
      }
    }
    if (flag){
      return original[original.length - 1]
    } else {
      return modified[modified.length - 1]
    }
  }
}

let original = 'abcd'
let modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

original = 'stepfor'
modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'

original = 'abcde'
modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // ''