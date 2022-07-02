function betterThanAverage(classPoints, yourPoints) {
    let sumClass = classPoints.reduce((acc, c) => acc + c, 0)
    let sumAll = sumClass + yourPoints
    let averagePoints = sumAll / (classPoints.length + 1)
    return averagePoints < yourPoints ? true : false
}
