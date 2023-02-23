function sumOfMinimums(arr) {
  let minArr = arr.map(x=> Math.min(...x))
  
  return minArr.reduce((acc,c)=> acc+c,0)
}
