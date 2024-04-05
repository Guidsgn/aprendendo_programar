console.log("----------------------------------------");
console.log(" ");

function gravidade() {
    console.log("Console Log dentro de uma Função > A gravidade do planeta é: " + 9.8);
};

console.log("Console Log > Opa, tudo certo?");

gravidade();

console.log(" ");
console.log("----------------------------------------");
console.log(" ");

console.log("Função de Somar Padrão")

function somar(n1, n2) {
    let resultado = n1 + n2;

    console.log("Resultado = " + resultado);
};

somar(10, 15);

console.log(" ");
console.log("----------------------------------------");
console.log(" ");

console.log("Função que junta o nome e sobrenome")

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
};

nomeCompleto("João", "Silva");

// Entrada ---> Processamento ---> Saida/Resultado



console.log(" ");
console.log("----------------------------------------");
console.log(" ");



function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}


let idade = 14;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log("É maior de idade!");
} else {
    console.log("Função de conferir se é menor ou maior de idade > É menor de idade.");
}

console.log(" ");
console.log("----------------------------------------");
console.log(" ");


// Calcule a porcentagem entre 2 números;
// Exemplo: 25% de 40 é 10
// Fórmula da porcentagem: (y / x) * 100

// Uso da função:

function calcPct(p1, p2) {
    return (p2 / p1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);

console.log(`${pct}% de ${x} é ${y}`);

console.log(" ");
console.log("----------------------------------------");
console.log(" ");

// Calcule o preço do imóvel

// - m2 = 3.000
// - Se tiver 1 quarto, o m2 é 1x
// - Se tiver 2 quartos, o m3 é 1.2x
// - Se tiver 3 quartos, o m2 é 1.5x

// Uso da função:

function calculaImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    
    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2;
        break;
        case 2:
            preco = metragem * (m2 * 1.2);
        break;
        case 3:
            preco = metragem * (m2 * 1.5);
        break;
    }

    return preco;
}

let metragem = 123;
let quartos = 2;
let preco = calculaImovel(metragem, quartos);

console.log(`A casa custa R$${preco}`);

console.log(" ");
console.log("----------------------------------------");
console.log(" ");

// Crie uma função que valide usuário e senha.

// Usuário correto: Pedro
// Senha correta: 123

// Uso da função:

function validar(usuario, senha) {
    if(usuario === "Pedro" && senha === 123) {
        return true;
    } else {
        return false;
    }
}

let usuario = "Pedro";
let senha = 1234;
let validacao = validar(usuario, senha);

if (validacao) {
    console.log("Acesso permitido!");
} else {
    console.log("Acesso negado.");
}



console.log(" ");
console.log("----------------------------------------");
console.log(" ");



// Modo Padrão de Cria uma Função //

// function somar(x, y) {
//     return x + y;
// }

// Modo Usando Arrow Function //

// const somar = (x, y) => {
//     return x + y;
// }

const somar2 = (x, y) => x +y; // Forma Resumida da Arrow Function

console.log(somar2(10, 5));


console.log(" ");
console.log("----------------------------------------");
console.log(" ");

console.log("Função Dentro de uma Função");

function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));

console.log(" ");
console.log("----------------------------------------");