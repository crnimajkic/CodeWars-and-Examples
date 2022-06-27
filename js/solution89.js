function findDifference(a, b) {
    let first = a.reduce((acc,c)=>acc*c,1)
    let second = b.reduce((acc,c)=>acc*c,1)
  return Math.abs(first - second)
  }