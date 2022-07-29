function pipeFix(numbers){
  let numberOfPipes = numbers[numbers.length-1] - numbers[0]
  let numsForReturn = []
  for (let i = 0;i<=numberOfPipes;i++){
    numsForReturn.push(numbers[0]+i)
  }
  return numsForReturn
}
