const closestMultiple10 = num => {
    let remeinder = num % 10
    if (remeinder < 5) {
        num = num - remeinder
    } else {
        num = num + (10 - remeinder)
    }
    return num
};