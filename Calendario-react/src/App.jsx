//app.jsx
import React from "react";
import { getMes } from "./util";
import CalendarHeader from "./components/CalendarioHeader";
import SideBar from "./components/SideBar";
import Mes from "./components/Mes";
import { useState, useContext, useEffect } from "react";
import GolbalContext from "./context/GlobalContex";
function App() {
  const [mesAtual, setMesAtual] = useState(getMes());
  const { mesIndex } = useContext(GolbalContext);

  useEffect(() => {
    setMesAtual(getMes(mesIndex));
  }, [mesIndex]);

  return (
    <>
      <React.Fragment>
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
