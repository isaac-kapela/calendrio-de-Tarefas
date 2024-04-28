import { useContext } from "react";
import  GolbalContext from "../context/GlobalContex";
export default function ModalTarefa() {
    const { setmostrarTarefaModal} = useContext(GolbalContext)
  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
          <header className="bg-gray-100 px-4 py-2  flex justify-between items-center">
            <span className="text-gray-400">Nova Tarefa</span>

            <button onClick={() => setmostrarTarefaModal(false)}>
              <span className="text-gray-400">
              <img width="24" height="24" src="https://img.icons8.com/forma-thin/24/delete-sign.png" alt="delete-sign"/>
              </span>
            </button>
          </header>
        </form>
      </div>
    </>
  );
}
