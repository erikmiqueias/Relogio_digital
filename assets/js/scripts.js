const hora = document.querySelector("#hour");
const minuto = document.querySelector("#minute");
const segundo = document.querySelector("#second")

const relogioDigital = setInterval(() => {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if(h < 10) {
        h = "0" + h;
    }

    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }
    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s; 

});