import LogoMeet from "../assets/logo-meet.png";
import { useContext } from "react";
import GolbalContext from "../context/GlobalContex";
import dayjs from "dayjs";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function CalendarioHeader() {
  const { mesIndex, setMesIndex } = useContext(GolbalContext);

  function handleMesAnterior() {
    setMesIndex(mesIndex - 1);
  }
  function handleMesPosterior() {
    setMesIndex(mesIndex + 1);
  }
  function handleVoltarDataAtual() {
    setMesIndex(
      mesIndex === dayjs().month() ? mesIndex + Math.random() : dayjs().month()
    );
  }

  const { deslogar } = useAuth();
  const navegar = useNavigate();

  function handleDeslogar() {
    deslogar();
    navegar("/");
  }
  return (
    <>
      <header className="px-4 py-2 flex items-center">
        <img src={LogoMeet} alt="" className="mr-2 w-12 h-12" />
        <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendario</h1>
        <button
          onClick={handleVoltarDataAtual}
          className="border py-2 px-4 mr-5 "
        >
          Hoje
        </button>

        <button onClick={handleMesAnterior}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/forma-light/24/circled-chevron-left.png"
              alt="circled-chevron-left"
            />
          </span>
        </button>

        <button onClick={handleMesPosterior}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <img
              width="24"
              height="24"
              style={{}}
              src="https://img.icons8.com/forma-light/24/circled-chevron-right.png"
              alt="circled-chevron-left"
              className="mx-4	"
            />
          </span>
        </button>

        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), mesIndex)).format("MMMM YYYY")}
        </h2>
        <button
          onClick={handleDeslogar}
          type="submit"
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sair
        </button>
      </header>
    </>
  );
}