function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = dadYearsOld - sonYearsOld
  let fathersResultYear = difference * 2
  
  return Math.abs(dadYearsOld - fathersResultYear)
}
