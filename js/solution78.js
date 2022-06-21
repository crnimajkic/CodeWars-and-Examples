function descendingOrder(n){
    n = String(n)
    let descending = n.split('').sort((a,b)=>b-a)
    descending = descending.join('')
    return parseInt(descending)
   }