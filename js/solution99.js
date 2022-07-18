function isValidWalk(walk) {
  let north = walk.filter(x => x=='n').length
  let south = walk.filter(x => x=='s').length
  let east = walk.filter(x => x=='e').length
  let west = walk.filter(x => x=='w').length
  
  if(walk.length !== 10 ){
    return false
  }else if(north==south && east==west){
    return true
  }
}
