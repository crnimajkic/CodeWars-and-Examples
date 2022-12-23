1
function madShout(sidewalk){
2
  let indexY= sidewalk.indexOf('Y')
3
  let indexF= sidewalk.indexOf('F')
4
  let difference = indexF-indexY
5
  let numberOfI = []
6
  console.log(difference)
7
  if(difference <3){
8
    return 'Oi F!'
9
  }else{
10
    difference = difference/2
11
    difference = Math.ceil(difference)
12
    console.log(difference)
13
    for(let i = 0;i<=difference-1;i++){
14
      numberOfI.push('i') 
15
   
16
    }
17
  return `O${numberOfI.join('')} F!`
18
  }
19
}
 Grea
