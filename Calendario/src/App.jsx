//app.jsx
import React from "react";
import { getMes } from "./util";
import CalendarHeader from "./components/CalendarioHeader";
import SideBar from "./components/SideBar";
import Mes from "./components/Mes";

import { useState } from "react";

function App() {
  const [mesAtual, setMesAtual] = useState(getMes()); 
  return (
    <>
      <React.Fragment>
      <div className="h-screen flex flex-col bg-red-900">
          <CalendarHeader/>
          <div className="flex flex-1"> 
          <SideBar/>
          <Mes  mes={mesAtual}/>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default App;
