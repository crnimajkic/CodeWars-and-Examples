function abbrevName(name){
    let arrOfFirstLetters = name.split(' ').map(x => x[0].toUpperCase())
     return  arrOfFirstLetters.join('.')// code away
  
  }