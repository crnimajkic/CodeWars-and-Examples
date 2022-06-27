function updateLight(current) {
    let next
    switch (current) {
        case "green":
            next = "yellow"
            break
        case "yellow":
            next = "red"
            break
        case "red":
            next = "green"
            break
    }
    return next
}
