var number=function(array){
    let retArr =[]
    for(let i = 1;i<=array.length;i++){
      retArr.push(`${i}: ${array[i-1]}`)
      }
    return retArr
  }