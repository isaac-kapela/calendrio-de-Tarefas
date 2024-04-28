//Context --> GlobalContext.jsx
import React from "react";

const GolbalContext = React.createContext({
  mesIndex: 0,
  setMesIndex: (index) => {},
  CalendarioPequenoMes: 0,
  setCalendarioPequenoMes: (index) => {},
  diaEscolhido: null,
  setDiaEscolhido: (dia) => {},
  mostrarTarefaModal: false,
  setmostrarTarefaModal: (  ) => {},
  despachoTarefa: ( { type, payload } ) => {},
  salvarTarefa: [],
  selecionadaTarefa: null,
  setselecionadaTarefa: (tarefa) => {},
  setLabels: (labels) => {},
  aatualizaLabel: () => {},
  Labels: [],
  atualizaLabel: () => {},
  filtrarTarefas: [],
});   

export default GolbalContext;
