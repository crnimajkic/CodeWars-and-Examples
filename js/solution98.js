var number = function(busStops){
  return busStops.map(x=> x=x[0]-x[1]).reduce((acc,c)=>acc+c,0)
}
