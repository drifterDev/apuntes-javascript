// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function compile(code) {
  let flag=true
  const puntos=[]
  let res=0
  for(let i=0;i<code.length;i++){
    if(code[i]==='¿' && res>0)flag=true
    else if(code[i]==='¿' && res<=0)flag=false
    else if(code[i]==='?')flag=true

    if(!flag)continue

    if(code[i]==='+')res++
    else if(code[i]==='-')res--
    else if(code[i]==='*')res*=2
    else if(code[i]==='%'){
      puntos.push(i)
      code=code.slice(0, i)+' '+code.slice(i + 1)
    }else if(code[i]==='<' && puntos.length>0){
      code=code.slice(0, i)+' '+code.slice(i + 1)
      i=puntos[puntos.length-1]
      puntos.pop()
    }
  }
  return res
}

console.log(compile('++*-')) // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')) // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--')) // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?')) // 3
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?')) // -2
// - 1 - 1 = -2