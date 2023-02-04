function twoSum(numbers, target) {
  let result
  let half = Math.ceil(numbers.length)
  for(let i = 0; i<=half;i++){
    let x = i + 1
   for(let y = x;y<=(numbers.length-1);y++){
     if(numbers[i]+numbers[y] === target){
       result = [ i , y]
     }else{
       console.log(target)
     }
   }
 }
  
  return result
}
