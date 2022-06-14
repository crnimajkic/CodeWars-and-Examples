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