function findOdd(A) {
    //declaring a empty object
    let count ={}
    //filling the object with keys and values
    for(let int of A){
      if(count[int]){
        count[int]+=1
      }else{
        count[int]=1
      }
    }
    // Taking the keys from object and declaring new variable
    const keys = Object.keys(count)
    let odd 
    // looping through the keys to find one with odd number to asign it to new variable
    keys.forEach(key=>{
      if(count[key]%2){
        odd = key
      }
    })
    //returning the newely asigned variable
    return +odd
  }