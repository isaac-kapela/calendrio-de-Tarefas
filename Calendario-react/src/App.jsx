//app.jsx
import React from "react";
import { getMes } from "./util";
import CalendarHeader from "./components/CalendarioHeader";
import SideBar from "./components/SideBar";
import Mes from "./components/Mes";
import { useState, useContext, useEffect } from "react";
import GolbalContext from "./context/GlobalContex";
import ModalTarefa from "./components/ModalTarefa";

function App() {
  const [mesAtual, setMesAtual] = useState(getMes());
  const { mesIndex, mostrarTarefaModal } = useContext(GolbalContext);

  useEffect(() => {
    setMesAtual(getMes(mesIndex));
  }, [mesIndex]);

  return (
    <>
      <React.Fragment>
        {mostrarTarefaModal && <ModalTarefa />}
        
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <SideBar />
            <Mes mes={mesAtual} />
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default App;
