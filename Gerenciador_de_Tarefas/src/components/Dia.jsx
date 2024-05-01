
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import GolbalContext from "../context/GlobalContex";

function Dia({ dia, linhaIdx }) {
  const [diaTarefa, setDiaTarefa] = useState([]);
  const { setDiaEscolhido, setmostrarTarefaModal, filtrarTarefas, setselecionadaTarefa } = useContext(GolbalContext);

  useEffect(() => {
    const tarefa = filtrarTarefas.filter((tarefa) => dayjs(tarefa.dia).format("DD-MM-YY") === dia.format("DD-MM-YY"));
    setDiaTarefa(tarefa);
  }, [filtrarTarefas, dia]);

  function obterDiaAtualClass() {
    return dia.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  
  function calcularDuracao(horaInicio, horaFim) {
    if (!horaInicio || !horaFim) return ""; 
    const inicio = dayjs(`2024-01-01 ${horaInicio}`, "YYYY-MM-DD HH:mm");
    const fim = dayjs(`2024-01-01 ${horaFim}`, "YYYY-MM-DD HH:mm");
    const duracaoMinutos = fim.diff(inicio, "minute");
    if (duracaoMinutos < 0) return "Horário inválido"; 
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    return `${horas}h ${minutos}min`;
  }
  

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {linhaIdx === 0 && (
          <p className="text-sm mt-1">{dia.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${obterDiaAtualClass()}`}>
          {dia.format("DD")}
        </p>
      </header>
      <div className="flex-1 cursor-pointer" onClick={() => { setDiaEscolhido(dia); setmostrarTarefaModal(true)}}>
        {diaTarefa.map((trf, idx) => (
          <div onClick={() => setselecionadaTarefa(trf) } key={idx} className={`bg-${trf.rotulo}-200 mr-3 text-sm p-1 rounded mb-1 truncate flex flex-col text-center`}>
            <div className="text-black-800">{trf.titulo}</div>
            <span className="text-gray-600 bg-white">Inicio: {trf.horaInicio}</span>
            <span className="text-gray-600 bg-white">Termino: {trf.horaFim}</span>
            <span className="text-gray-600 bg-white">Descrição: {trf.descricao}</span>
            
            <span className="text-gray-600 bg-white">Duração: {calcularDuracao(trf.horaInicio, trf.horaFim)}</span>
          </div>  
        ))}
      </div>
    </div>
  );
}

Dia.propTypes = {
  dia: PropTypes.object.isRequired,
};

export default Dia;
