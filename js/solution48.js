function squareOrSquareRoot(array) {
    return array.map(x => {
            if (Math.sqrt(x) % 1 === 0) {
              return  x = Math.sqrt(x)
                console.log(x)
            } else { 
               return x = x * x 
                console.log(x)
            }
        })
}