function setReducer(input) {
  let returnArr = []
  let counter = 1
  input.forEach((number, index) =>{
                
    if(input[index] === input[index+1]){
    counter++
  }else{
    returnArr.push(counter)
    counter = 1
  }
          
  })
  
  return returnArr.length == 1? returnArr[0] : setReducer(returnArr)
  
}
