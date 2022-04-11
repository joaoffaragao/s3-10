


function positions(firstPlace,secondPlace,lastPlace){
    
   let competidores = [firstPlace,secondPlace,lastPlace]

    if(competidores[2] == "Daniel"){
        let temporario = competidores[1]
        competidores[1] = "Daniel"
        competidores[2] = temporario;
    }else{
        if(competidores[1] == "Daniel"){
            let temporario = competidores[0]
            competidores[0] = "Daniel"
            competidores[1] = temporario;
        }
    }
    
    console.log( "1ª - Colocado " + competidores[0])
    console.log( "2º  - Colocado " + competidores[1])
    console.log( "3º  - Colocado " + competidores[2])
}


positions("Rafael","Manoel","Daniel")
console.log(" ----------------  ")
positions("Rafael","Daniel","Manoel")
console.log(" ----------------  ")

positions("Manoel","Rafael","Daniel")
console.log(" ----------------  ")
positions("Manoel","Daniel","Rafael")

console.log(" ----------------  ")
positions("Daniel","Manoel","Rafael")
console.log(" ----------------  ")
positions("Daniel","Rafael","Manoel")