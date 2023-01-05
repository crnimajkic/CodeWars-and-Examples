function sumDigits(number) {
    number = Math.abs(number)
    return number.toString().split('').reduce((acc,c)=> acc + Number(c),0)
    }