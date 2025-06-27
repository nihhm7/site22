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
const tempoObjetivo1 = new Date("2029-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


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
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
const agora = new Date();
const MILISSEGUNDOS_EM_UM_DIA = 1000 * 60 * 60 * 24;

const datasObjetivos = [
  new Date(agora.getTime() + 1827 * MILISSEGUNDOS_EM_UM_DIA),
  new Date(agora.getTime() + 120 * MILISSEGUNDOS_EM_UM_DIA),
  new Date(agora.getTime() + 730 * MILISSEGUNDOS_EM_UM_DIA),
  new Date(agora.getTime() + 365 * MILISSEGUNDOS_EM_UM_DIA)
];

function atualizarContadores() {
  const agora = new Date();

  datasObjetivos.forEach((dataAlvo, index) => {
    const diferenca = dataAlvo - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById(`dias${index}`).textContent = dias;
    document.getElementById(`horas${index}`).textContent = horas;
    document.getElementById(`min${index}`).textContent = minutos;
    document.getElementById(`seg${index}`).textContent = segundos;
  });
}

// Atualiza a cada segundo
setInterval(atualizarContadores, 1000);

// Também atualiza assim que a página carregar
atualizarContadores();
