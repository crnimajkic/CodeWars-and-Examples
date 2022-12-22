function min(a, b){
  
  if(a=== null && b=== null){
    return 0
  }else if (a=== null){
     
    return (0<b)?0:b
  
  }else if(b=== null){
    return (a<0)?a:0
  }
  
  
  if(a === undefined || b === undefined){
    return NaN
  }
  
  if(isNaN(a) || isNaN(b)){
    console.log( 'after nan if',a,b)
    return NaN
    
  }
  
  
  
  
  
  return (a<b)?a:b;
}