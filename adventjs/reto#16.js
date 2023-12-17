// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function transformTree(tree){
  let funcion=(tree, index=0)=>{
    if (index >= tree.length || tree[index] === null) {
      return null
    }

    const tmp = {
      value: tree[index],
      left: funcion(tree, 2 * index + 1),
      right: funcion(tree, 2 * index + 2),
    }

    return tmp
  }

  const tmp =funcion(tree, 0)
  return tmp
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
// {
//   value: 3,
//   left: {
//     value: 1,
//     left: {
//       value: 8,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 12,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 0,
//     left: null,
//     right: {
//       value: 1,
//       left: null,
//       right: null
//     }
//   }
// }