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
// sum of specific series
const SeriesSum = n => {
  let sum = 1
  if(n<=1){
    return n.toFixed(2).toString()
  }else{
    for(i=1;i<n;i++){
      sum += 1/(1+(i*3))
      }
    return sum.toFixed(2).toString()
}
}
// Difference of arrays
function arrayDiff(a, b) {{ 
    
  return a.filter(function(ele){ 
      return !(b.includes(ele)); 
  });
}

}

// vezba bankaccounts

class User {
  constructor(name, balance) {
      this.name = name
      this.balance = balance
  }
  credit() {
      this.balance += 1000
  }
  describe() {
      console.log(`${this.name} has ${this.balance}$ in his account`)
  }
}


const seul = new User('Seul', 0)
const paul = new User('Paul', 0)

//vezba RPG Character

class Character {
  constructor(name, health, streangth, inventory) {
      this.name = name
      this.health = health
      this.streangth = streangth
      this.experience = 0
      this.inventory = inventory
  }
  attack(target) {
      // if attack is impossible

      if (target.health <= 0) {
          console.log(`The target is alredy dead!`)

      } else if (this.health <= 0) {
          console.log(`This character has been slain,no attack has been done.`)


      } else if (this.health > 0) { //attack is possible

          let dmg = this.streangth
          target.health -= dmg

          if (target.health <= 0) {
              console.log(`${this.name} has slain ${target.name}, and gained 10 XP, ${target.inventory[0]} gold and ${target.inventory[1]} key(s).`)
              this.experience += 10
              for (let i = 0; i < target.inventory.length; i++) {
                  this.inventory[i] += target.inventory[i]
              }
          } else {
              console.log(`${this.name} has inflicted ${dmg} damage to ${target.name}.${target.name} has ${target.health} health points left.`)
          }
      }




  }

  describe() {
      return `${this.name} has ${this.health} health points,${this.experience} experience,${this.streangth} strength points. In invetory ${this.name} has ${this.inventory[0]} gold and ${this.inventory[1]} key(s)`
  }

}

const aurora = new Character("Aurora", 100, 50, [50, 1])
const travis = new Character("Travis", 100, 50, [50, 1])


const governmentForms = [
  {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
  },
  {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
  },
  {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
  },
  {
      name: "Theocracy",
      definition: "Rule by a religious elite"
  },
  {
      name: "Democracy",
      definition: "Rule by the people"
  },
  {
      name: "Autocracy",
      definition: "Rule by a single person"
  }
];

const arrNames = arr => arr.map(arr => arr.name)
const filterEndingCy = arr => arr.filter(element => element.substr(-2) == 'cy')

const arrandFilter = (arr, filterarr) => filterarr(arr)

console.log(arrandFilter(arrNames(governmentForms), filterEndingCy))

//console.log(arrandfilter(arrNames(governmentForms),filterEndingCy))
// TODO: compute the formsEndingWithCy array

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
//console.log(formsEndingWithCy);


const arrays = [[1, 4], [11], [3, 5, 7]];

const suminternal = arr => arr.map(x => x.reduce((acc, e) => acc + e, 0))
const arraysSum = suminternal(arrays).reduce((acc, e) => acc + e, 0)

// TODO: compute the value of the arraysSum variable

console.log(arraysSum); // Should show 31

// square every digit
function squareDigits(num){
  let simo = num.toString().split('').map(e=>e**2).join('')
  return parseInt(simo);
}

// order the words in string
function order(words) {
  let ordered = []
  if (words === []) {
      return []
  } else {
      let splited = words.split(' ')
      for (let i = 1; i <= splited.length; i++) {
          ordered.push(splited.filter(x => x.includes(i)))
      }
  }
  return ordered.join(' ')
}


