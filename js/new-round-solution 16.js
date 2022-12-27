Birglery attempt

// Return how many turns the burglar needs to steal all the diamonds
function diamondBurglar(locker){
  let counter = 0
  locker.forEach(row =>{
    let places = row.split('')
    console.log( 'places is' , places)
    
    while (places.indexOf('*')>-1){
      counter += 1
      
      let index = places.indexOf('*')
      
      delete places[index]
      
      if(places[index+1] === '*'){
        delete places[index+1]
      }
    }
    
  })
