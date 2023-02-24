function sayHello( name, city, state ) {
  
  let fullname = name.reduce((acc,c)=> acc + ' ' + c, '')
  
  return `Hello,${fullname}! Welcome to ${city}, ${state}!`
}
