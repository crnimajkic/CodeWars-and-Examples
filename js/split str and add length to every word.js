function addLength(str) {
let wordsArr = str.split(' ')
return wordsArr.map(x =>{
  return `${x} ${x.length}`
})
}
