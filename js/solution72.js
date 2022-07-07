function cockroachSpeed(s) {
    let kmInOneSec = (s/3600)
    let cmInOneSec = kmInOneSec*100000
    return Math.floor(cmInOneSec)
  }