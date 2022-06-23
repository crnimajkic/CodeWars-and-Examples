
function strCount(str, letter){  
    let strarr = str.split('')
    let filtered = strarr.filter(x => x === letter)
    return filtered.length//code here
  }