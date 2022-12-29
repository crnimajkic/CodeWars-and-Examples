function getCount(str) {
    let regex = /[aeiou]/gi
    return str.match(regex)? str.match(regex).length:0;
  }