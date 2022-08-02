function removeUrlAnchor(url){
  let indexOfHash = url.split('').indexOf('#') 
  if (indexOfHash === -1){
    return url
  }else {
    let result =  url.substring(0,indexOfHash) 
return result// TODO: complete
  }

}
