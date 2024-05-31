const entry = require('prompt-sync')();

let hero_name = entry("What's your name hero? ");
let xp = entry("How much XP do you have? You have to choose a positive value: ");

if (xp < 1001) {
    xp = "Ferro"
} else if (xp < 2001) {
    xp = "Bronze"
} else if (xp < 5001) {
    xp = "Prata"
} else if (xp < 7001) {
    xp = "Ouro"
} else if (xp < 8001) {
    xp = "Platina"
} else if (xp < 9001) {
    xp = "Ascendente"
} else if (xp < 10001) {
    xp = "Imortal"
} else {
    xp = "Radiante"
}

console.log("\nBrave my hero " + hero_name + "! Your level is ", xp + "! You are a great hero.")


