console.log("------------------------------");
console.log(" ");

let cores = [
    'Preto',
    'Branco',
    'Azul',
    'Vermelho'
];
cores.push('Verde');

console.log('Jeito 1 de Fazer o LOOP FOR');
console.log(" ");

for(let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}

console.log(" ");
console.log("------------------------------");
console.log(" ");

console.log('Jeito 2 de Fazer o LOOP FOR');
console.log(" ");

for(let i in cores) {
    console.log(cores[i])
}

console.log(" ");
console.log("------------------------------");
console.log(" ");

console.log('Jeito 3 de Fazer o LOOP FOR');
console.log(" ");

for(let cor of cores) {
    console.log(cor)
}

console.log(" ");
console.log("------------------------------");
console.log(" ");

console.log('LOOP WHILE');
console.log(" ");

// While = Enquanto

let numero = 0;

while (numero <= 10) {
    console.log(`O número da vez é: ${numero}`);
    numero++;
}
// while (true) {
//     console.log('Olá eu sou o TRAVA NAVEGADOR!!!!!!!!!!!! MUAHAHAHAHAAHAHA')
// }

console.log(" ");
console.log("------------------------------")