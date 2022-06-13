// suming array without min and max

function sumArray(array) {
    //checking end samples
      if (array === undefined ||array === null || array === [] || array.length === 2) {
          return 0
      }
  //finding indexes
      let indexmin = array.indexOf(Math.min(...array))
      let indexmax = array.indexOf(Math.max(...array))
  // defining newArr without max and min
      let newArr = array.filter((x,i) => {
          if (i != indexmin && i != indexmax) {
              return x
          }
      })
      //returnig reduced array
      return newArr.reduce((acc, e) => acc + e, 0)
  }