const calendario = document.querySelector(".calendario"),
  data = document.querySelector(".data"),
  diasContainer = document.querySelector(".dias"),
  anterior = document.querySelector(".anterior"),
  proximo = document.querySelector(".proximo"),
  hojeBotao = document.querySelector(".hoje-btn"),
  reuniaoBotao = document.querySelector(".reuniao-btn"),
  dataInput = document.querySelector(".data-input");
const eventodia = document.querySelector(".eventoDia");
const eventoData = document.querySelector(".eventoData");
const eventosContainer = document.querySelector(".eventos");
const addEventoSubmit = document.querySelector(".add-evento-btn");


let hoje = new Date();
let ativoDia;
let mes = hoje.getMonth();
let ano = hoje.getFullYear();

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let eventosLista = [
  {
    dia: 25,
    mes: 4,
    ano: 2024,
    eventos: [
      {
        nome: "Reunião",
        horario: "10:00",
        descricao: "Reunião com a equipe de marketing",
      },
    ],
  },
];

function iniciarCalendario() {
  const primeiroDia = new Date(ano, mes, 1);
  const ultimoDia = new Date(ano, mes + 1, 0);
  const anteriorUltimoDia = new Date(ano, mes, 0);
  const anteriorDia = anteriorUltimoDia.getDate();
  const ultimoDiaMes = ultimoDia.getDate();
  const dia = primeiroDia.getDay();
  const proximoDias = 7 - ultimoDia.getDay() - 1;

  data.innerHTML = meses[mes] + " " + ano;

  let dias = "";

  for (let x = dia; x > 0; x--) {
    dias += `<div class="dia anterior">${ultimoDiaMes - x + 1}</div>`;
  }

  for (let i = 1; i <= ultimoDiaMes; i++) {
    let temEvento = false;
    eventosLista.forEach((eventoObj) => {
      if (
        eventoObj.dia === i &&
        eventoObj.mes === mes + 1 &&
        eventoObj.ano === ano
      ) {
        temEvento = true;
      }
    });
    ativoDia = i;
    getDiaAtvo(i);
    atualizarEventos(i);

    if (
      i === new Date().getDate() &&
      ano === new Date().getFullYear() &&
      mes === new Date().getMonth()
    ) {
      if (temEvento) {
        dias += `<div class="dia hoje ativo evento">${i}</div>`;
      } else {
        dias += `<div class="dia hoje ativo">${i}</div>`;
      }
    } else {
      if (temEvento) {
        dias += `<div class="dia  evento">${i}</div>`;
      } else {
        dias += `<div class="dia ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= proximoDias; j++) {
    dias += `<div class="dia proximo">${j}</div>`;
  }
  diasContainer.innerHTML = dias;

  addOuvinte();
}

iniciarCalendario();

function mesAnterior() {
  mes--;
  if (mes < 0) {
    mes = 11;
    ano--;
  }
  iniciarCalendario();
}

function proximoMes() {
  mes++;
  if (mes > 11) {
    mes = 0;
    ano++;
  }
  iniciarCalendario();
}

anterior.addEventListener("click", mesAnterior);
proximo.addEventListener("click", proximoMes);

hojeBotao.addEventListener("click", () => {
  hoje = new Date();
  mes = hoje.getMonth();
  ano = hoje.getFullYear();
  iniciarCalendario();
});

dataInput.addEventListener("keyup", (e) => {
  dataInput.value = dataInput.value.replace(/[^0-9]/g, "");
  if (dataInput.value.length === 2) {
    dataInput.value += "/";
  }

  if (dataInput.value.length > 7) {
    dataInput.value = dataInput.value.slice(0, 7);
  }
  if ((e.inputType = "deleteContentBackward")) {
    if (dataInput.value.length === 3) {
      dataInput.value = dataInput.value.slice(0, 2);
    }
  }
});

reuniaoBotao.addEventListener("click", reuniaoData);

function reuniaoData() {
  const dataDeChegada = dataInput.value.split("/");
  if (dataDeChegada.length === 3) {
    if (
      dataDeChegada[0] > 0 &&
      dataDeChegada[0] < 13 &&
      dataDeChegada[2].length === 4
    ) {
      mes = parseInt(dataDeChegada[1]) - 1;
      ano = parseInt(dataDeChegada[2]);
      iniciarCalendario();
      return;
    }
  }
  alert("Data inválida");
}

const addEventoBtn = document.querySelector(".add-evento"),
  addEventoConteiner = document.querySelector(".add-evento-box"),
  addEventoFecharBtn = document.querySelector(".close"),
  addEventoTitulo = document.querySelector(".evento-nome"),
  addEventoForms = document.querySelector(".horario-evento"),
  addEventoDescricao = document.querySelector(".descricao-evento");

addEventoBtn.addEventListener("click", () => {
  addEventoConteiner.classList.toggle("ativo");
});
addEventoFecharBtn.addEventListener("click", () => {
  addEventoConteiner.classList.remove("ativo");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventoBtn && !addEventoConteiner.contains(e.target)) {
    addEventoConteiner.classList.remove("ativo");
  }
});

addEventoTitulo.addEventListener("input", (e) => {
  addEventoTitulo.value = addEventoTitulo.value.slice(0, 50);
});

addEventoForms.addEventListener("input", (e) => {
  addEventoForms.value = addEventoForms.value.replace(/[^0-9:]/g, "");
  if (addEventoForms.value.length === 2) {
    addEventoForms.value += ":";
  }
  if (addEventoForms.value.length > 5) {
    addEventoForms.value = addEventoForms.value.slice(0, 5);
  }
});

addEventoDescricao.addEventListener("input", (e) => {
  addEventoDescricao.value = addEventoDescricao.value.slice(0, 50);
});

function addOuvinte() {
  const dias = document.querySelectorAll(".dia");

  dias.forEach((dia) => {
    dia.addEventListener("click", (e) => {
      dias.forEach((dia) => {
        dia.classList.remove("ativo");
      });

      e.target.classList.add("ativo");

      ativoDia = Number(e.target.innerHTML);
      getDiaAtvo(e.target.innerHTML);
      atualizarEventos(Number(e.target.innerHTML));
    });
  });
}

function getDiaAtvo(data) {
  const dia = new Date(ano, mes, data);

  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const diaSemana = diasDaSemana[dia.getDay()];

  const dataFormatada = `${diaSemana}, ${dia.getDate()} de ${
    meses[dia.getMonth()]
  } de ${dia.getFullYear()}`;

  eventodia.textContent = diaSemana;
  eventoData.textContent = dataFormatada;
}

function atualizarEventos(data) {
  let eventos = "";
  eventosLista.forEach((evento) => {
    if (data === evento.dia && mes === evento.mes - 1 && ano === evento.ano) {
      evento.eventos.forEach((evento) => {
        eventos += `
            <div class="evento">
                <div class="titulo">
                    <i class="fas fa-circle"></i>
                    <h3>${evento.nome}</h3>
                </div>
                <div class="horario-evento">
                    <span>${evento.horario}</span>
                </div>
                <div class="descricao-evento">
                    <p>${evento.descricao}</p>
                </div>
            </div>
        `;
      });
    }
  });

  if (eventos === "") {
    eventos = `
        <div class="sem-evento">
            <h3>Sem tarefas</h3>
        </div>
    `;
  }

  eventosContainer.innerHTML = eventos;
}

addEventoSubmit.addEventListener("click", () => {
  const eventoTitulo = addEventoTitulo.value;
  const eventoHorario = addEventoForms.value;
  const eventoDescricao = addEventoDescricao.value;

  if (eventoTitulo === "" || eventoHorario === "" || eventoDescricao === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const HoraReuniao = eventoHorario.split(":");
  const descricao = eventoDescricao.split(":");

  if (
    HoraReuniao.length !== 2 ||
    descricao.length !== 2 ||
    HoraReuniao[0] > 23 ||
    HoraReuniao[1] > 59 ||
    descricao[0] > 23 ||
    descricao[1] > 59
  ) {
    alert("Por favor, insira um horário válido");
    return;
  }

  const horaDe = converterTempo(eventoHorario);
  const descricaoDe = converterTempo(eventoDescricao);

  const NovaTarefa = {
    titulo: eventoTitulo,
    horario: horaDe + " - " + descricaoDe,
  };

  let eventoAdicionado = false;

  if (eventosLista.length > 0) {
    eventosLista.forEach((item) => {
      if (item.dia === ativoDia && item.mes === mes + 1 && item.ano === ano) {
        item.eventos.push(NovaTarefa);
        eventoAdicionado = true;
      }
    });
  }

  if (!eventoAdicionado) {
    const novoEvento = {
      dia: ativoDia,
      mes: mes + 1,
      ano: ano,
      eventos: [NovaTarefa],
    };
    eventosLista.push(novoEvento);
  }
});

addEventoConteiner.classList.remove("ativo");

addEventoTitulo.value = "";
addEventoForms.value = ""; 
addEventoDescricao.value = "";

atualizarEventos(ativoDia);

function converterTempo(tempo){
    const tempoArray = tempo.split(":");
    let hora = parseInt(tempoArray[0], 10);
    const minuto = tempoArray[1];
    const formato = hora >= 12 ? "PM" : "AM";
    hora = hora % 12;
    hora = hora ? hora : 12; 
    const tempoFinal = hora + ":" + minuto + " " + formato;

    return tempoFinal;
}