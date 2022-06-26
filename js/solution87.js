function find_average(array) {
    let result 
    if(array.length === 0){
      result = 0
    }else{
       result = array.reduce((acc,c)=> acc+c,0)/array.length;
    }
    return result
  }