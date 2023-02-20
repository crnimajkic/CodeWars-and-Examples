function noIfsNoButs(a, b) {
  switch(a){
      case b:
    return `${a} is equal to ${b}`
    break;
  }
  
  let min = Math.min(a,b)
  
  
  switch(min){
      case a:
    return `${a} is smaller than ${b}`
    break;
    default:
      return `${a} is greater than ${b}`
  }
  
    
  
}
