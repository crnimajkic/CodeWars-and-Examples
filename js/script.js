// SHARK ATTACK GAME

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin == true) {
    sharkSpeed = sharkSpeed / 2
  }
  console.log(`brzina ajkule je ${sharkSpeed}`)

  let t1 = pontoonDistance / youSpeed
  let t2 = sharkDistance / sharkSpeed
  console.log(`t1 je ${t1}, a t2 je ${t2}`)
  if (t1 < t2) {
    return 'Alive'
  } else
    return 'Shark bait'


}
console.log(shark(2, 3, 2, 4, false))


// 10 digit number to phone string

function createPhoneNumber(numbers) {
  numbers = numbers.map(num => {
    return num.toString();
  });

  let StrNum
  StrNum = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

  return StrNum
}

// Removing every other element in arr
function removeEveryOther(arr) {
  let newarr = []
  arr.forEach((e, i) => {
    if (i = 0 || i % 2 === 0) {
      newarr.push(e)
    }
  })
  return newarr
}
// Finding vowels
function vowelIndices(word) {
  let output = []
  word.toLowerCase().split('').filter((element, index) => {
    if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u' || element === 'y') {
      output.push(index + 1)
    }
  })
  return output
}
// Brake camelCase
function solution(string) {
  return string.replace(/([A-Z])/g, " $1")
}
//reversed sequence
const reverseSeq = n => {
  let arr = []
  for (i = 1; i < n + 1; i++) {
    arr.push(i)
  }
  return arr.sort(function (a, b) { return b - a })
};
//sum of pozitivses 
function positiveSum(arr) {
  let res = 0
  //for every element check if it is positive, and if true ad i to the result
  for (e of arr) {
    if (e > 0) {
      res += e
    }
  }
  return res
}

// Even or odd number
function even_or_odd(number) {
  if (number < 0) {
    number = -number
  }

  if (number % 2 === 1) {
    return 'Odd'
  } else return 'Even'
}
// fakeBin arreys
function fakeBin(x) {
  //making new arr
  let string = []
  x.split('').forEach(e => {
    parseInt(e)
    //filling the new array
    if (e < 5) {
      string.push('0')
    } else {
      string.push('1')
    }
  })
  // returning a string
  return string.join('')
}

//reversing words in sentence!
function reverseWords(str) {
  return output = str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
}
