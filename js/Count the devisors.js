function getDivisorsCnt(n){
    let counter = 0
    for(let i = 1;i<=n;i++){
      if(n%i === 0){
        counter++
      }
    }
  return counter
}
