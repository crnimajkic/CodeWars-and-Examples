function roundToNext5(n){
  let m = n + 1
 return n%5 == 0 ? n : roundToNext5(m)
}
