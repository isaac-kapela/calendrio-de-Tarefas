import PropTypes from "prop-types";
import GlobalContext from "./GlobalContex";
import { useEffect, useMemo, useReducer, useState } from "react";
import dayjs from "dayjs";

function salvarTarefaReduce(estado, { type, payload }) {
  switch (type) {
    case "salvar_tarefa":
      return [...estado, payload];
    case "atualizar_tarefa":
      return estado.map((tarefa) =>
        tarefa.id === payload?.id ? payload : tarefa
      );
    case "remover_tarefa":
      return estado.filter((tarefa) => tarefa.id !== payload?.id);
    default:
      throw new Error("Ação desconhecida");
  }
}

function iniciarTarefas() {
  const armazenarTarefas = localStorage.getItem("salvarTarefas");
  const analisarTarefas = armazenarTarefas ? JSON.parse(armazenarTarefas) : [];
  return analisarTarefas;
}

function BoxContext({ children }) {
  const [mesIndex, setMesIndex] = useState(dayjs().month());
  const [CalendarioPequenoMes, setCalendarioPequenoMes] = useState(null);
  const [diaEscolhido, setDiaEscolhido] = useState(dayjs());
  const [mostrarTarefaModal, setmostrarTarefaModal] = useState(false);
  const [selecionadaTarefa, setselecionadaTarefa] = useState(null);
  const [Labels, setLabels] = useState(["pink", "blue", "green", "red", "purple"]);

  const [salvarTarefa, despachoTarefa] = useReducer(
    salvarTarefaReduce,
    [],
    iniciarTarefas
  );

  const filtrarTarefas = useMemo(() => {
    return salvarTarefa.filter((tarefa) => Labels.filter((lbl) => Array.isArray(lbl.verificado) && lbl.verificado.map(lb => lb.rotulo).includes(tarefa.rotulo)));
  }, [salvarTarefa, Labels]);
  

  function atualizaLabel(label){
    setLabels((preLabels) => {
      return preLabels.map(lb => lb.label === label.label ? {...lb, verificado: label.verificado} : lb)
    })
  }

  useEffect(() => {
    setLabels((preLabels) =>{
      return [...new Set(salvarTarefa.map(trf => trf.rotulo))].map(rotulo => {
        const labelAtual = preLabels.find(lb => lb === rotulo);
        return {rotulo, verificado : labelAtual ? labelAtual.verificado : true,}
      })
    })
  }, [salvarTarefa]);

  useEffect(() => {
    localStorage.setItem("salvarTarefas", JSON.stringify(salvarTarefa));
  }, [salvarTarefa]);

  useEffect(() => {
    if (CalendarioPequenoMes !== null) {
      setMesIndex(CalendarioPequenoMes);
    }
  }, [CalendarioPequenoMes]);

  return (
    <GlobalContext.Provider
      value={{
        mesIndex,
        setMesIndex,
        CalendarioPequenoMes,
        setCalendarioPequenoMes,
        diaEscolhido,
        setDiaEscolhido,
        mostrarTarefaModal,
        setmostrarTarefaModal,
        salvarTarefa,
        despachoTarefa,
        selecionadaTarefa,
        setselecionadaTarefa,
        Labels,
        setLabels,
        filtrarTarefas,
        atualizaLabel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

BoxContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxContext;
