//Variáveis 
let nomeHeroi = "IronMan";
let xpAtual = 3000;

//Estrutura de decisão para determinar o nível com base na XP
let nivel;

if (xpAtual < 1000) {
    nivel = "Ferro"
} else if (xpAtual >= 1001 && xpAtual <= 2000) {
    nivel = "Bronze"
} else if (xpAtual >= 2001 && xpAtual <= 5000) {
    nivel = "Prata"
} else if (xpAtual >= 5001 && xpAtual <= 7000) {
    nivel = "Ouro"
} else if (xpAtual >= 7001 && xpAtual <= 8000) {
    nivel = "Platina"
} else if (xpAtual >= 8001 && xpAtual <= 9000) {
    nivel = "Ascendente"
} else if (xpAtual >= 9001 && xpAtual <= 10000) {
    nivel = "Imortal"
} else if (xpAtual >= 10001) {
    nivel = "Radiante"
} else {
    nivel = "Desconhecido";
}

console.log(`O Herói ${nomeHeroi} acumulou ${xpAtual} XP`);
console.log(`Ele está no nível de ${nivel}.`);