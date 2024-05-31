// second challenge felipao

let number_of_victories = Math.floor(Math.random() * 100) + 1;
let number_of_defeats = Math.floor(Math.random() * 100) + 1;
let resultat = number_of_victories - number_of_defeats
let level

function announce_the_league(resultat,level) {

    if(resultat <= 10) {
        level = "Iron"
    } else if(resultat <= 20) {
        level = "Bronze"
    } else if(resultat <= 50) {
        level = "Silver"
    } else if(resultat <= 80) {
        level = "Gold"
    } else if(resultat <= 90) {
        level = "Diamond"
    } else if(resultat <= 100) {
        level = "Legendary"
    } else if(resultat >= 101) {
        level = "Immortal"
    }
    
    let victory_defeat
    if(resultat > 1) {
        victory_defeat = "victories"
    } else if(resultat === 1) {
        victory_defeat = "victory"
    } else {
        victory_defeat = "defeat(s)"
    }
    console.log("The hero has " + resultat + " " + victory_defeat + ".")
    console.log("Your level is " + level + "!")
}

announce_the_league(resultat,level)