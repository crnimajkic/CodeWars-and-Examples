function mxdiflg(a1, a2) {
 
  
  if(a1 === [] || a1 === []  || a1.includes('') ||a2.includes('') ){
    return -1
  }
  
    let lengthsA1 = a1.map(x => x.length);   
                           
    let lengthsA2 = a2.map(x => x.length)
    
    let maxA1 = Math.max(...lengthsA1)
    let maxA2 = Math.max(...lengthsA2)
    let minA1 = Math.min(...lengthsA1)
    let minA2 = Math.min(...lengthsA2)
  
    
    let diff1 = maxA1 - minA2
     let diff2 = maxA2 - minA1
    
     
     if(diff1 === -Infinity || diff2 === -Infinity){
       return -1
     }
     
    return diff1 < diff2 ? diff2 : diff1
}
