
// keyup = solta tecla
// keydown = pressionando tecla

// Eventos

document.body.addEventListener('keyup', (e)=>{ // "ouvindo" quando uma tecla é soltada na página
    playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

// Funções

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); // seleciona arquivo de audio baseado na tecla que apertou
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); // seleiona a div da tecla que apertou

    if(audioElement) { // toca o audio selecionado
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) { // adiciona a classe active para a div da tecla que apertou
        keyElement.classList.add('active'); // adiciona a class active

        setTimeout(()=>{ // remove a class active depois de 300ms
            keyElement.classList.remove('active');
        }, 300);
    }
}

function  playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) { // loop no array
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;

    }
}