console.log("------------------------------");
console.log(" ");

let frutas = [
    'yamamomo',
    'abacaxi',
    'abacate',
    'banana',
    'bacuri',
    'caju',
    'carambola',
    'romã',
    'cacau',
    'damasco',
    'durião',
    'embaúba',
    'figo',
    'ingá',
    'amora'
];

frutas.push('kiwi'); // Faz com que adicione um novo item no Array

frutas.shift(); // Deleta o primeiro item do Array
frutas.pop(); // Deleta o ultimo item do Array

frutas[1] = 'bergamota';

console.log(frutas); // Mostra o Array
console.log(frutas.join(', ')); // Junta os itens do Array com o que foi colocado no join entre eles
// No caso gera uma string sem mexer no Array

console.log(" ");

console.log(frutas.length); // Mostra a quantidade de itens no Array

console.log(" ");
console.log("------------------------------");
console.log(" ");

frutas.sort(); // Altera e ordena o Array em ordem alfabetica

console.log(frutas);

frutas.reverse(); // Inverte a ordem do Array

console.log(frutas);

console.log(" ");
console.log("------------------------------");
console.log(" ");

let cars = [
    { modelo: 'Fiat', ano: 2022 },
    { modelo: 'BMW', ano: 2018 },
    { modelo: 'Ferrari', ano: 2020 }
];

cars.sort((a, b) => a.ano - b.ano) // Ordenação por ano

console.log(cars);

console.log(" ");
console.log("------------------------------");
console.log(" ");

// Iteração com Array

let bigFrutas = frutas.filter((item) => item.length > 5) // Filtrar para frutas com mais de 5 letras

console.log(bigFrutas);

console.log(" ");
console.log("------------------------------");
console.log(" ");

let checkFrutas = frutas.every((item) => item.length > 3); // Every = Todos Itens

if(checkFrutas) {
    console.log('Todas as Frutas tem mais de 3 letras');
} else {
    console.log('Nem todas as frutas tem mais de 3 letras!')
}

console.log(" ");

let checkFrutas2 = frutas.some((item) => item.length > 3); // Some = Um Item

if(checkFrutas2) {
    console.log('Algum item mais de 3 letras');
} else {
    console.log('Algum item não tem  mais de 3 letras!')
}

console.log(" ");
console.log("------------------------------");
console.log(" ");

if(frutas.includes('bergamota')) {
    console.log('Tem uma Berga simmm!')
} else {
    console.log('Não tem Berga :(');
}

console.log(" ");
console.log("------------------------------")