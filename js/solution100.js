function accum(s) {
	let string = Array.from(s).map((x,i)=>{
    if(i==0){
       return x.toUpperCase()
    }else{
      let end = ''
      for(let c=0;c<i;c++){
        end = end+ x.toLowerCase()
      }
     return'-'+ x.toUpperCase()+end
    }
  })
  
  return string.join('')
}
