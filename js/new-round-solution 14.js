function isPythagoreanTriple(integers) {
  let sort = integers.sort(function(a, b){return a-b})
  
  return sort[0]**2+sort[1]**2==sort[2]**2
}
