// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function calculateTime(deliveries) {
  let act=0
  deliveries.forEach(element => {
    let tmp = element.split(':')
    act+=parseInt(tmp[0])*60*60
    act+=parseInt(tmp[1])*60
    act+=parseInt(tmp[2])
  })
  let nums=[0,0,0]
  let tmp=Math.abs(7*60*60-act)
  let signo = (act>=7*60*60?'':'-')
  nums[0]=Math.floor(tmp/(60*60))
  tmp-=nums[0]*60*60
  nums[1]=Math.floor(tmp/60)
  tmp-=nums[1]*60
  nums[2]=tmp
  let t=0
  nums.forEach(a => {
    if(a<10)a=`0${a}`
    nums[t]=a
    t++
  })
  let ans = signo
  ans+=nums.join(':')
  return ans
}


console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime(['00:45:00','00:45:00','00:00:30','00:00:30'])) 
// '-05:29:00'