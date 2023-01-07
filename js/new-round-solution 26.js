// counting consonants in the str


function consonantCount(str) {
    let resArr = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    return resArr == null ? 0 : resArr.length
    
  }

