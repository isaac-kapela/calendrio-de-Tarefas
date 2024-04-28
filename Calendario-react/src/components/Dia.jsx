// components --> Dia.jsx
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import GolbalContext from "../context/GlobalContex";

function Dia({ dia, linhaIdx }) {
  const [diaTarefa, setDiaTarefa] = useState([])
  const {setDiaEscolhido, setmostrarTarefaModal, salvarTarefa, setselecionadaTarefa } = useContext(GolbalContext);

  useEffect(() => {
    console.log({salvarTarefa})
    const tarefa = salvarTarefa.filter((tarefa) => dayjs(tarefa.dia).format("DD-MM-YY") === dia.format("DD-MM-YY"));
    setDiaTarefa(tarefa);
  }, [salvarTarefa, dia]);

  function obterDiaAtualClass() {
    return dia.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {linhaIdx == 0 && (
          <p className="text-sm mt-1">{dia.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${obterDiaAtualClass()}`}>
          {dia.format("DD")}
        </p>
      </header>
      <div className="flex-1 cursor-pointer" onClick={() => { setDiaEscolhido(dia); setmostrarTarefaModal(true)}}>
        {diaTarefa.map((trf, idx) => (
          <div onClick={() => setselecionadaTarefa(trf) } key={idx} className={`bg-${trf.rotulo}-200 mr-3 text-gray-600 text-sm p-1 rounded mb-1 truncate`}>
            {trf.titulo}
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