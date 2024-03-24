console.log("------------------------------");
console.log(" ");

let colors = [
    'red',
    'green',
    'blue'
];

console.log("Cores do RGB:", colors[0], "-", colors[1], "-", colors[2], "= RGB");

let lista = [
    'BlaBla',
    ['xx', 'yy']
];

console.log(lista[1][0]);

console.log(" ");
console.log("------------------------------");
console.log(" ");

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'sal',
    'leite'
];

// .shift = Remove o primeiro item do array
// .pop = Remove o ultimo item do array

console.log(ingredientes);
console.log(`Total de Ingredientes: ${ingredientes.length}`);

console.log(" ");
console.log("------------------------------");
console.log(" ");

console.log("Exercicio de Arrray");

// 1. No array abaixo, qual o número que pega a Ferrari?

let carros = [
    'BMW',
    'Ferrari',
    'Mercedes'
];
let x = 1;
console.log('1. ' + carros[x]);

console.log(" ");

// 2. Troque a Ferrari por Audi

carros[1] = 'Audi';

console.log('2. Lista com Audi');
console.log(carros);

console.log(" ");

// 3. Adicione o volvo na lista

carros.push('Volvo');

console.log('3. Lista com Volvo: ' + carros);

console.log(" ");

// 4. Exiba quantos itens tem no array

console.log('4. Itens no Array: ' + carros.length);

console.log(" ");
console.log("------------------------------");