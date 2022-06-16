function basicOp(operation, value1, value2) {
    let res
    switch (operation) {
      case '+':
        res = value1 + value2
        break
      case "-":
        res = value1 - value2
        break
      case "*":
        res = value1 * value2
        break
      case "/":
        res = value1 / value2
        break
    }
    return res
  }