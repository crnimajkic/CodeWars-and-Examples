// SHARK ATTACK GAME

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//    if(dolphin == true){
//        sharkSpeed = sharkSpeed/2
//    }
//    console.log (`brzina ajkule je ${sharkSpeed}`)

//     let t1 = pontoonDistance/youSpeed
//     let t2 = sharkDistance/sharkSpeed
//    console.log(`t1 je ${t1}, a t2 je ${t2}`)
//     if (t1<t2){ 
//         return 'Alive'
//     }else 
//         return 'Shark bait'

  
// }
// console.log(shark(2,3,2,4,false))


// 10 digit number to phone string

function createPhoneNumber(numbers){
    numbers = numbers.map(num => {
    return num.toString();
  });
    
    let StrNum
    StrNum = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    
    return StrNum
  }