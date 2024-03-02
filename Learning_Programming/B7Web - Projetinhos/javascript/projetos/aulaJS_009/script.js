/*

Calcule a porcentagem entre 2 números;
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100

Uso da função:

*/

console.log("--- [ ==================== ] ---");

function calcPct(p1, p2) {
    return (p2 / p1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);

console.log(`${pct}% de ${x} é ${y}`);

console.log("--- [ ==================== ] ---");

/*

Calcule o preço do imóvel

- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m3 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x

Uso da função:

*/

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

console.log("--- [ ==================== ] ---");

/*

Crie uma função que valide usuário e senha.

Usuário correto: Pedro
Senha correta: 123

Uso da função:

*/

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