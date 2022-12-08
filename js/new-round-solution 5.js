function getSum( a,b ){
  console.log(a,b)
  if(a==b){
    return a
  }else if(a<b){
    let arr = []
    for(let i = a;i<=b;i++){
      arr.push(i)
    }
   return arr.reduce((acc,c)=>acc+c,0)
  }else{
  let arr = []
    for(let i = b;i<=a;i++){
      arr.push(i)
    }
   return arr.reduce((acc,c)=>acc+c,0)
    }
}