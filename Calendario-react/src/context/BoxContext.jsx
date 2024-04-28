import PropTypes from "prop-types";
import GlobalContext from "./GlobalContex";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function BoxContext({ children }) {
  const [mesIndex, setMesIndex] = useState(dayjs().month());
  const [CalendarioPequenoMes, setCalendarioPequenoMes] = useState(null);
  const [diaEscolhido, setDiaEscolhido] = useState(null);
  const [mostrarTarefaModal, setmostrarTarefaModal] = useState(false);

  useEffect(() =>{
    if(CalendarioPequenoMes !== null){
      setMesIndex(CalendarioPequenoMes)
    }
  },[CalendarioPequenoMes])

  return (
    <GlobalContext.Provider value={{
       mesIndex, setMesIndex, 
       CalendarioPequenoMes, setCalendarioPequenoMes,
        diaEscolhido,setDiaEscolhido,
        mostrarTarefaModal, setmostrarTarefaModal,
           }}>
      {children}
    </GlobalContext.Provider>
  );
}

BoxContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxContext;
