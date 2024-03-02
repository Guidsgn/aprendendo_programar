// Loja Virtual e temos que clcular o frete
// Caso seja membro o frete vai ficar grautuito ou mais barato

let isMember = true;

let frete = isMember ? 2 : 10;

console.log(isMember ? "Você é membro!" : "Você não é membro.")
console.log("Frete = R$" + frete);

console.log("--------------------")

let age = 14;

let isAdult = ((age >= 18 && age < 60) ? "Você é um adulto!" : "Você não é um adulto.");

console.log(isAdult)