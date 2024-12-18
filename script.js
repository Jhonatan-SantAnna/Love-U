function contadorTempo(){
    const agora = new Date()

    const hora = agora.getHours()
    const minuto = agora.getMinutes()
    const segundo = agora.getSeconds()

    document.getElementById("horaCerta").innerHTML = `${hora} : ${minuto} : ${segundo}`
};

setInterval(contadorTempo, 1000);

contadorTempo();