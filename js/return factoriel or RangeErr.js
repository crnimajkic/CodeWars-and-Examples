function factorial(n)
{
  let result = 1
  
  if(n<0 || n>12){
    throw new RangeError("The argument must be between 0 and 12.")
  }
  
    try {
    check(n);
  } catch (error) {
  if (error instanceof RangeError) {
    return RangeError
  }
}
  
  if(n === 0){
     return result
  }
  
  for(let i = 1;i<=n;i++){
    
    result = result * i
    
  }
  return result
