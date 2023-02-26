function solve(s){
  let l = 0
  let u = 0
  
   s.split('').forEach(x => {
     
     if(x === x.toLowerCase()){
       l++
     }else{
       u++
     }
   })
  
  return l>=u ? s.toLowerCase(): s.toUpperCase()
}
