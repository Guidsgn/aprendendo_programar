console.log("----------------------------------------");

function gravidade() {
    console.log("A gravidade do planeta é: " + 9.8);
};

console.log("Opa, tudo certo?");

gravidade();

console.log("----------------------------------------");



function somar(n1, n2) {
    let resultado = n1 + n2;

    console.log("Resultado = " + resultado);
};

somar(10, 15);

console.log("----------------------------------------");



function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
};

nomeCompleto("João", "Silva");

// Entrada ---> Processamento ---> Saida/Resultado



console.log("----------------------------------------");



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
    console.log("É menor de idade.");
}

console.log("----------------------------------------");



