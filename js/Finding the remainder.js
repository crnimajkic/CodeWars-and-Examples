function remainder(n, m){
  let min = Math.min(...[n,m])
  let max = Math.max(...[n,m])
  
  return min == 0 ? NaN : max%min
}
