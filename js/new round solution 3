function printerError(s) {
  let numofcolors = 0
  let regex= /[a-m]/
  
  s.split('').forEach(letter =>{
    if(regex.test(letter)){
      numofcolors++
    }
  })
  let numofmistakes= s.length - numofcolors
   return  `${numofmistakes}/${s.length}`// your code
}
