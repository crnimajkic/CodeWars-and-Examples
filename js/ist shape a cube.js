var cubeChecker = function(volume, side){
  if(side === 0 ) return false
    if(volume <= 0 ) return false
  return volume === side **3;
};
