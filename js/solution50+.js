// suming array without min and max

function sumArray(array) {
  //checking end samples
  if (array === undefined || array === null || array === [] || array.length === 2) {
    return 0
  }
  //finding indexes
  let indexmin = array.indexOf(Math.min(...array))
  let indexmax = array.indexOf(Math.max(...array))
  // defining newArr without max and min
  let newArr = array.filter((x, i) => {
    if (i != indexmin && i != indexmax) {
      return x
    }
  })
  //returnig reduced array
  return newArr.reduce((acc, e) => acc + e, 0)
}

// Unique numbers 

function uniqueInOrder(iterable) {
  let sol = []
  iterable = Array.from(iterable)
  for (i = 0; i < iterable.length; i++) {
    if (i === 0) {
      sol.push(iterable[i])
    } else if (iterable[i] != iterable[i - 1]) {
      sol.push(iterable[i])
    }
  }
  return sol
}

//bouncing ball
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let times = -1
    for (h; h > window; h = h * bounce) {
      times = times + 2
      console.log(h)
    }
    console.log(times)
    return times

  } else {
    return -1
  }
}
// XOR
function xor(a, b) {
  if(a===true&&b===false||a===false&&b===true){
    return true
  }else{
    return false
  }
}

// hourmin sec
function past(h, m, s){
  return (h*60*60*1000)+(m*60*1000)+(s*1000)//#Happy Coding! ^_^
 }

// sorting odds in array
function sortArray(array) {

  let oddNumsInArray = array.filter(x => x % 2 == 1 || x % 2 === -1)
  oddNumsInArray.sort(function (a, b) { return a - b })
  let count = 0

  let newArray = array.map(x => {
    if (x % 2 === 1 || x % 2 === -1) {
      x = oddNumsInArray[count]
      count = count + 1
      return x
    } else { return x }
  })
  return newArray
}

// likes meme

function likes(names) {
  return names.length === 0 ? "no one likes this" : names.length === 1 ? `${names[0]} likes this` : names.length === 2 ? `${names[0]} and ${names[1]} like this` : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

// uppercase 

const makeUpperCase = str => str.toUpperCase();

//  string manipulation
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return `${name} plays banjo`
  } else return `${name} does not play banjo`
}
// filter !
function removeExclamationMarks(s) {
  let filtered = s.split('').filter(x => x != "!")
  return filtered.join("")
}
//

function stray(numbers) {

  let filtered = numbers.filter((x, i) => {
    if (i = 0) {
      if(x!==numbers[1]){
        return x
      }
   } else if (x !== numbers[i - 1]) {
      return x
    }
  })
  return filtered[0]
}
// returnig high and low from string of nums

function highAndLow(numbers){
  let arrnum = numbers.split(" ")
  return `${Math.max(...arrnum)} ${Math.min(...arrnum)}`
}

function alphabetPosition(text) {
  return text.toLowerCase().split('').map(x =>{
    let y
    switch(x){
      case "a":
        y = 1
        break
        case "b":
        y = 2
        break
        case "c":
        y = 3
        break
        case "d":
        y = 4
        break
        case "e":
        y = 5
        break
        case "f":
        y = 6
        break
        case "g":
        y = 7
        break
        case "h":
        y = 8
        break
        case "i":
        y = 9
        break
        case "j":
        y = 10
        break
        case "k":
        y = 11
        break
        case "l":
        y = 12
        break
        case "m":
        y = 13
        break
        case "n":
        y = 14
        break
        case "o":
        y = 15
        break
        case "p":
        y = 16
        break
        case "q":
        y = 17
        break
        case "r":
        y = 18
        break
        case "s":
        y = 19
        break
        case "t":
        y = 20
        break
        case "u":
        y = 21
        break
        case "v":
        y = 22
        break
        case "w":
        y = 23
        break
        case "x":
        y = 24
        break
        case "y":
        y = 25
        break
        case "z":
        y = 26
        break
    }
  return y
  }).filter(x => x).join(" ")
}