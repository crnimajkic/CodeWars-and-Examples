function getDrinkByProfession(param){
  let answer 
switch (param.toLowerCase()) {
    case "jabroni" :
    answer = "Patron Tequila"
    break;
    
    case "school counselor" :
     answer = "Anything with Alcohol"
    break;
    
    case "programmer" :
    answer = "Hipster Craft Beer"
    break;
    
    case "bike gang member" :
     answer = "Moonshine"
    break;
    
    case "politician" :
     answer = "Your tax dollars"
    break;
    
    case "rapper" :
     answer = "Cristal"
    break;
    
    default:
    answer = "Beer";
}
  return answer
}