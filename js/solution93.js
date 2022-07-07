function warnTheSheep(queue) {
    queue = queue.reverse()
  let whereIsTheWolf = queue.indexOf("wolf")
  return whereIsTheWolf == 0? "Pls go away and stop eating my sheep":`Oi! Sheep number ${whereIsTheWolf}! You are about to be eaten by a wolf!`
  }