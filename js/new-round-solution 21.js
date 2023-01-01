function diamond(n){
  
  console.log(n)
  if(n<=0||n%2 == 0){
    return null
  }
  let returnStrTop = ''
  let returnStrBot = ''
  let ast = '*'
  let newline = '\n'
  let steps = 0
  let space = ' '
  
  
  for(let i = n; i>= 1;i=i-2){
    returnStrBot += space.repeat(steps) + ast.repeat(i) + newline
    steps++
  }
  
  let newSteps = 1
  
  for(let i = n-2; i>= 1;i=i-2){
    returnStrTop = space.repeat(newSteps) + ast.repeat(i) + newline + returnStrTop
    newSteps++
  }
  
  return returnStrTop + returnStrBot
  }
