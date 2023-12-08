// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function organizeGifts(gifts) {
  let tmp = []
  let last = 0
  const nums = ['1','2','3','4','5','6','7','8','9','0']
  for(let i=0;i<gifts.length;i++){
    if(!nums.includes(gifts[i])){
      tmp.push([parseInt(gifts.substring(last,i)), gifts[i]])
      last=i+1
    }
  }
  let ans = ""
  tmp.forEach(gif => {
    const pale = Math.floor(gif[0]/50)
    const cajas = Math.floor(gif[0]/10) - pale*5
    const paquetes = gif[0]%10
    ans+=`[${gif[1]}]`.repeat(pale)
    ans+=`{${gif[1]}}`.repeat(cajas)
    if(paquetes>0){
      ans+="("+(`${gif[1]}`.repeat(paquetes))+")"
    }
  })
  return ans
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)*/