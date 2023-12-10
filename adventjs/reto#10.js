// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function createChristmasTree(ornaments, height) {
  let ans = []
  let act = 0
  const n = ornaments.length;
  for(let i=1;i<=height;i++){
    let tmp=""
    tmp+=ornaments[act%n]
    act++;
    for(let j=2;j<=i;j++){
      tmp+=" "+ornaments[act%n]
      act++;
    }
    ans.push(" ".repeat(height-i)+tmp)
  }
  ans.push(" ".repeat(height-1)+"|")
  return ans.join("\n")+"\n"
}

console.log(createChristmasTree("123", 4))
console.log(createChristmasTree("*@o", 3))