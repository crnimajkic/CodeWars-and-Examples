function reverseLetter(str) {
  let regex = /[a-z]/g
  return str.split('').reverse().join('').match(regex).join('')

}
