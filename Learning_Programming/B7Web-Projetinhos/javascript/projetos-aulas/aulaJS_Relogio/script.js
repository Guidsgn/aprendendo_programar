
const relogioDigital = document.querySelector(".digital"); // Relógio Digital
const relPonteiroSegundos = document.querySelector(".p_s"); // Ponteiro de Segundos
const relPonteiroMinutos = document.querySelector(".p_m"); // Ponteiro de Minutos
const relPonteiroHoras = document.querySelector(".p_h"); // Ponteiro de Horas

function updateRel() {

    const now = new Date();

    const hora = now.getHours(); // Hora
    const minuto = now.getMinutes(); // Minuto
    const segundo = now.getSeconds(); // Segundos

    relogioDigital.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundo)}`; // Relógio Digital

    const sDeg = ((360 / 60) * segundo) - 90;
    relPonteiroSegundos.style.transform = `rotate(${sDeg}deg)`;

    const mDeg = ((360 / 60) * minuto) - 90;
    relPonteiroMinutos.style.transform = `rotate(${mDeg}deg)`;

    const hDeg = ((360 / 12) * hora) - 90;
    relPonteiroHoras.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateRel, 1000);
updateRel();