function getMiddle(s)
{
 let even = s.length%2? true:false
 if(even){
   return s[Math.floor(s.length/2)]
 }else{
   return s[(s.length/2)-1]+s[(s.length/2)]
 }
}