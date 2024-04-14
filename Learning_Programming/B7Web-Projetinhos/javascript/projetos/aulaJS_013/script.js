console.log(" ");
console.log("------------------------------");

let domButton = document.querySelector("#btn-tocar-dom");

function domMudou() {

    const body = document.querySelector('body');
    const titulo = document.querySelector('#title-area');
    const texto = document.querySelector('#text-area');
    const conteudo = document.querySelector("#content-area");
    const inputConteudo = document.querySelector("#content-area input");
    const button = document.querySelector("button");

    // ------------------- //

    body.style.background = '#050505'
    titulo.style.color = '#fdfdfd'
    texto.style.color = '#fdfdfd'
    conteudo.style.color = '#fdfdfd'
    inputConteudo.style.background = '#050505'
    inputConteudo.style.border = '1px solid #fdfdfd'
    button.style.background = '#050505'
    button.style.border = '1px solid #fdfdfd'

    // ------------------- //

    let newUl = document.createElement("ul");

    for (let i = 1; i < 6; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "Item Add. " + i;
        newUl.append(newLi);
    }

    conteudo.appendChild(newUl);

    // ------------------- //

    if (inputConteudo.hasAttribute('placeholder')) {
        console.log("O input de Conteúdo TEM placeholder!");
    } else {
        console.log("O input de Conteúdo NÃO TEM placeholder!");
    }

    if (inputConteudo.getAttribute('type') === 'text') {
        inputConteudo.setAttribute('type', 'password');
    } else {
        inputConteudo.setAttribute('type', 'text');
    }

    // ------------------- //

    let newTexto = document.createElement("p");
    newTexto.innerText = "Página Alterada com Sucesso!";

    texto.appendChild(newTexto);

    // ------------------- //

    // AFTER = Depois
    // BEFORE = Antes

}

domButton.addEventListener("click", domMudou);

console.log(" ");
console.log("------------------------------")