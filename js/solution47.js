function isTriangle(a, b, c) {
    if (a * b * c > 0) {
        if (a + b > c && a + c > b && b + c > a) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}