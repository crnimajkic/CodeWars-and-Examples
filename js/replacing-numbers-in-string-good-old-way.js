function stringClean(s){
   let numbers = ['1','2','3','4','5','6','7','8','9','0']
   
  const res = [...s].map(x => {
    
    if(numbers.includes(x)){
      return ''
    }else{
      return x
    }
  
  }).join('')
  
  return res
}
