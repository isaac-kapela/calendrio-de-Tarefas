import { useContext } from "react";
import GolbalContext from "../context/GlobalContex";

export default function CriarTarefas() {
  const { setmostrarTarefaModal} = useContext(GolbalContext)
  return (
    <>
      <button onClick={() => setmostrarTarefaModal(true)} className="border py-2 rounded-full flex items-center shadow-md  hover:shadow-2xl">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/arcade/64/calendar-plus.png"
          alt="calendar-plus"
          className="w-7 h-7 mx-2"
        />
        <span className="pl-3 pr-7">Criar</span>
      </button>
    </>
  );
}
