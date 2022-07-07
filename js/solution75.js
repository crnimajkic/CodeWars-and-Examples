function DNAStrand(dna){
    return dna.split("").map(x =>{
     switch(x){
         case "A":
          x = "T"
         break
         case "G":
         x = "C"
         break
         case "C":
         x = "G"
         case "T" :
         x ="A"
         break
     }
      return x
    }).join("")
  }