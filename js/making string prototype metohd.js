String.prototype.toAlternatingCase = function () {
  let newstr = this.split('').map(x => {
    if(x === x.toLowerCase()){
      return x.toUpperCase() 
    }else{
       return x.toLowerCase()
    }     
  }).join('')
  
return newstr
}
