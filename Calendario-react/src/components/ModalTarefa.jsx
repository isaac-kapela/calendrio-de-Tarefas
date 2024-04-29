import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContex";

const rotulosClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function ModalTarefa() {
  const {
    setmostrarTarefaModal,
    diaEscolhido,
    despachoTarefa,
    selecionadaTarefa,
  } = useContext(GlobalContext);
  const [titulo, setTitulo] = useState(
    selecionadaTarefa ? selecionadaTarefa.titulo : ""
  );
  const [descricao, setDescricao] = useState(
    selecionadaTarefa ? selecionadaTarefa.descricao : ""
  );
  const [horaInicio, setHoraInicio] = useState(
    selecionadaTarefa ? selecionadaTarefa.horaInicio : ""
  );
  const [horaFim, setHoraFim] = useState(
    selecionadaTarefa ? selecionadaTarefa.horaFim : ""
  );
  const rotuloPadrao = selecionadaTarefa
    ? selecionadaTarefa.rotulo
    : rotulosClasses[0];
  const [rotuloSelecionado, setRotuloSelecionado] = useState(rotuloPadrao);

  function handleHoraInicioChange(e) {
    const input = e.target.value.replace(/\D/g, ""); 
    const formattedInput = input.replace(/^(\d{2})/, "$1:"); 
    setHoraInicio(formattedInput);
  }

  function handleHoraFimChange(e) {
    const input = e.target.value.replace(/\D/g, ""); 
    const formattedInput = input.replace(/^(\d{2})/, "$1:"); 
    setHoraFim(formattedInput);
  }

  function handleenviar(e) {
    e.preventDefault();
    const calendarioTarefa = {
      titulo,
      descricao,
      rotulo: rotuloSelecionado,
      dia: diaEscolhido.valueOf(),
      horaInicio,
      horaFim,
      id: selecionadaTarefa ? selecionadaTarefa.id : Date.now(),
    };
    if (selecionadaTarefa) {
      despachoTarefa({ type: "atualizar_tarefa", payload: calendarioTarefa });
    } else {
      despachoTarefa({ type: "salvar_tarefa", payload: calendarioTarefa });
    }
    setmostrarTarefaModal(false);
  }

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
          
          <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
            
            <span
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                despachoTarefa({
                  type: "remover_tarefa",
                  payload: selecionadaTarefa,
                });
                setmostrarTarefaModal(false);
              }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                alt="filled-trash"
              />
            </span>
            
            <div>
              <button onClick={() => setmostrarTarefaModal(false)}>
                <span className="text-gray-400">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/forma-thin/24/delete-sign.png"
                    alt="delete-sign"
                  />
                </span>
              </button>
            </div>
          </header>
          
          <div className="p-3">
          
            <input
              type="text"
              name="titulo"
              placeholder="Adicionar Título"
              value={titulo}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 block mb-4"
              onChange={(e) => setTitulo(e.target.value)}
            />
          
            <input
              type="text"
              name="horaInicio"
              placeholder="Início (HH:MM)"
              value={horaInicio}
              required
              maxLength="5" 
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 block mb-4"
              onChange={handleHoraInicioChange}
            />
            
            <p>{diaEscolhido.format("DD, MMMM  YYYY")}</p>
            
            <input
              type="text"
              name="horaFim"
              placeholder="Termino  (HH:MM)"
              value={horaFim}
              required
              maxLength="5" 
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 block mb-4"
              onChange={handleHoraFimChange} 
            />
            
            <input
              type="text"
              name="descricao"
              placeholder="Adicionar Descrição"
              value={descricao}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 block mb-4"
              onChange={(e) => setDescricao(e.target.value)}
            />
            
            <div className="flex gap-x-2">
              {rotulosClasses.map((rotulo, idx) => (
                <span
                  key={idx}
                  onClick={() => setRotuloSelecionado(rotulo)}
                  className={`bg-${rotulo}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {rotuloSelecionado === rotulo && (
                    <span className="text-white text-sm">
                      <img
                        width="18"
                        height="18"
                        src="https://img.icons8.com/ios-glyphs/30/FFFFFF/checkmark--v1.png"
                        alt="checkmark--v1"
                      />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              onClick={handleenviar}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
            >
              Salvar
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
