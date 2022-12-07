function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === a.indexOf(item, index));
}
