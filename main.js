const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
let tempoDosObjetivos = [
    "2024-07-05T00:00:00",
    "2024-09-08T00:00:00",
    "2024-12-22T00:00:00",
    "2025-02-16T00:00:00"
];

function atualizaCronometro(){
    for (i = 0; i < tempoDosObjetivos.length; i++){
        contadores[i].textContent = calculaTempo(new Date(tempoDosObjetivos[i]));
    }
}

atualizaCronometro();
setInterval(atualizaCronometro, 200);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    }
    else{
        return "O Tempo se esgotou";
    }
}
