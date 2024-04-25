const calendario = document.querySelector('calendario'),
data = document.querySelector(".data"),
diasContainer = document.querySelector(".dias"),
anterior = document.querySelector(".anterior"),
proximo = document.querySelector(".proximo"),
hojeBotao = document.querySelector(".hoje-btn"),
reuniaoBotao = document.querySelector(".reuniao-btn"),
dataInput = document.querySelector(".data-input");

let hoje = new Date();
let ativoDia;
let mes = hoje.getMonth();
let ano = hoje.getFullYear();

const meses = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];

// funçao para adicionar dias
function iniciarCalendario(){
    //para obter os dias do mês anterior e o mês atual, todos os dias e os dias restantes do próximo mês
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const anteriorUltimoDia = new Date(ano, mes, 0);
    const anteriorDia = anteriorUltimoDia.getDate();
    const ultimoDiaMes = ultimoDia.getDate();
    const dia = primeiroDia.getDay();
    const proximoDias = 7 - ultimoDia.getDay() - 1; 

    //atualizar data no topo do calendário
    data.innerHTML = meses[mes] + " " + ano;

    //adicionando dias no dom
    let dias = "";

    //meses anteriores dias
    for(let x = dia; x > 0; x--){
        dias += `<div class="dia anterior">${ultimoDiaMes - x + 1}</div>`;
    }
     //dias do mês atual
    for(let i = 1; i <= ultimoDiaMes; i++){ 
        //se o dia for hoje adicione a aula hoje
        if(i === new Date().getDate()&& ano === new Date().getFullYear() && mes === new Date().getMonth()) {
            dias += `<div class="dia hoje">${i}</div>`;
        }
        //adiciona o restante como está
        else{
            dias += `<div class="dia">${i}</div>`;
        }
    }

    //dias do próximo mês
    for(let j = 1; j <= proximoDias; j++){
        dias += `<div class="dia proximo">${j}</div>`;
    }
    diasContainer.innerHTML = dias;
}

iniciarCalendario();

//mês anterior

function mesAnterior(){
    mes--;
    if(mes < 0){
        mes = 11;
        ano--;
    }
    iniciarCalendario();
}

//próximo mês
function proximoMes(){
    mes++;
    if(mes > 11){
        mes = 0;
        ano++;
    }
    iniciarCalendario();
}

//adicionar ouvinte de evento no anterior e no próximo
anterior.addEventListener("click", mesAnterior);
proximo.addEventListener("click", proximoMes);

hojeBotao.addEventListener("click", () => {
    hoje = new Date();
    mes = hoje.getMonth();
    ano = hoje.getFullYear();
    iniciarCalendario();
});

dataInput.addEventListener("chave", (e) => {
    //permitir apenas números remover qualquer outra coisa
    dataInput.value = dataInput.value.replace(/[^0-9]/g, "");
    if(dataInput.value.length === 2){
        dataInput.value += "/";
    }

    if(dataInput.value.length > 7){
        dataInput.value = dataInput.value.slice(0, 7);
    }
    if(e.inputType = "excluirConteúdoParaTras"){
        if(dataInput.value.length === 3){
        dataInput.value = dataInput.value.slice(0, 2);
        }
    }
});

reuniaoBotao.addEventListener("click",  reuniaoData);

//função para ir para a data inserida

function reuniaoData(){
    const dataDeChegada = dataInput.value.split("/");
    if(dataDeChegada.length === 2){
        if(dataDeChegada[0] > 0 && dataDeChegada[0] < 13 && dataDeChegada[1].length ===4){
            mes === dataDeChegada[0] -1;
            ano = dataDeChegada[1];
            iniciarCalendario();
            return;
        }
    }
    alert("Data inválida");
}