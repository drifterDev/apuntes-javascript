// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function drawGift(size, symbol) {
  let gift = []
  for(let i=0;i<2*size-1;i++){
    let tmp = []
    for(let j=0;j<2*size-1;j++){
      tmp.push(symbol)
    }
    gift.push(tmp)
  }
  for(let i=1;i<=2*size-2;i++){
    if(i>=size-1){
      gift[i][0]="#"
      gift[i][size-1]="#"
    }else{
      gift[i][size-1-i]="#"
      gift[i][2*size-2-i]="#"
    }
  }
  for(let i=0;i<size;i++){
    gift[0][2*size-2-i]="#"
    gift[size-1][i]="#"
    gift[2*size-2][i]="#"
    gift[i][2*size-2]="#"
    gift[i+size-1][2*size-2-i]="#"
  }
  for(let i=0;i<size-1;i++){
    for(let j=0;j<size-1-i;j++){
      gift[i][j]=' '
      gift[2*size-i-2][2*size-2-j]=''
    }
  }
  let ans = ""
  gift.map(str => ans+=str.join('')+"\n")
  return ans
}

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/