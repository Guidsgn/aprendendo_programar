let trabalho = "atleta";

console.log("Profissão: " + trabalho);

switch(trabalho) {
    case 'policial':
        console.log("Sua camisa será Azul!");
    break;
    case 'bombeiro':
        console.log("Sua camisa será Vermelha!");
    break;
    case 'fiscal':
        console.log("Sua camisa será Cinza!");
    break;

    default:
        console.log("Sua camisa será Preta!");
    break;
}