
function squareSum(numbers) {
    return numbers.reduce((acc, c) => acc + c ** 2, 0)
}

function isDivideBy(number, a, b) {
    return (number % a === 0 && number % b === 0) ? true : false
}