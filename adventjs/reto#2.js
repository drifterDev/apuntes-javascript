// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function manufacture(gifts, materials) {
  const ans = []
  gifts.forEach(element => {
    let pass = true
    for (let i = 0; i < element.length; i++){
      if (!materials.includes(element[i])){
        pass = false
      }
    }
    if (pass){
      ans.push(element)
    }
  })
  return ans
}

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)) // []