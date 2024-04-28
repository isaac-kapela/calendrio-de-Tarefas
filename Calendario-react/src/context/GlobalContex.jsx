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
  setmostrarTarefaModal: (  ) => {}
});   

export default GolbalContext;
