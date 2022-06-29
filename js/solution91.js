function longest(s1, s2) {
      s1=s1.split('')
      s2=s2.split('')
    let result = []
    s1.forEach(x=>{
      if(!result.includes(x)){
        result.push(x)
      }
    })
      s2.forEach(x=>{
        if(!result.includes(x)){
          result.push(x)
        }
      })
      return result.sort().join('')
    }
    