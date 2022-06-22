function sumDigPow(a, b) {
    let retArr = []
    for(let i=a;i<=b;i++){
      let strArr = String(i).split('')
      let squaredArr = strArr.map((x,index) => x**(index+1))
      let sumedSquared = squaredArr.reduce((acc,c) => acc + c, 0)
      if(sumedSquared===i){
        retArr.push(i)
      }
    }
    return retArr
  }
  