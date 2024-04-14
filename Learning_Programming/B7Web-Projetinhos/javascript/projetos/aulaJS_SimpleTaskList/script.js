
const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handleKeyUp(e) {
    if (e.key === 'Enter') {
        const newItem = document.createElement('li');
        newItem.innerHTML = input.value;
        lista.appendChild(newItem);

        input.value = '';
    }
}

input.addEventListener('keyup', handleKeyUp);
