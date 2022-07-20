

function countdown() {

    for(let i = 10; i > -1 ;i--) {
        console.log(i)
        if (i == 0) {
            console.log("blastoff")
        }
    }
  
    console.log("look at the rocket go")
    for(let i = 0; i <= 10 ;i++) {
        console.log(i)
    }
    console.log("count down again")

}

countdown()




// multiplication table

function multiplication() {

    for(let i = 1; i <= 10 ;i++) {
        let line = i + ":"
        for(let j = 1; j <= 10 ;j++) {
            line += "\t" + j*i 
        }
        console.log(line)
    }
}

multiplication()