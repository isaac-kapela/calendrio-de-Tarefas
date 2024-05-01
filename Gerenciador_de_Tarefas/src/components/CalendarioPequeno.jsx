import React from "react";
import dayjs from "dayjs";
import { useEffect, useState, useContext } from "react";
import { getMes } from "../util";
import GolbalContext from "../context/GlobalContex";

export default function CalendarioPequeno() {
  const [mesAtualIdx, setMesAtualIdx] = useState(dayjs().month());
  const [mesAtual, setMesAtual] = useState(getMes());

  useEffect(() => {
    setMesAtual(getMes(mesAtualIdx));
  }, [mesAtualIdx]);

  const { mesIndex, setCalendarioPequenoMes, diaEscolhido, setDiaEscolhido } = useContext(GolbalContext);

  useEffect(() => {
    setMesAtualIdx(mesIndex);
  }, [mesIndex]);

  function mesAnterior() {
    setMesAtualIdx(mesAtualIdx - 1);
  }

  function proximoMes() {
    setMesAtualIdx(mesAtualIdx + 1);
  }

  function getDiaClass(dia){
    const formatar = "DD-MM-YY";
    const hojeDia = dayjs().format(formatar);
    const diaSelecionado = dia.format(formatar);
    const diaEscolhidoFormatado = diaEscolhido &&  diaEscolhido.format(formatar);
      if(hojeDia === diaSelecionado){
        return "bg-blue-500 rounded-full text-white";
      } 
      else if( diaSelecionado === diaEscolhidoFormatado){ 
      return "bg-blue-200 rounded-full text-blue-500";
    
      }
      else{
        return "";
      }
  }
  return (
    <>
      <div className="mt-9">
        <header className="flex justify-between items-center">
          <p className="text-gray-500 font-bold">
            {dayjs(new Date(dayjs().year(), mesAtualIdx)).format("MMMM YYYY")}
          </p>
          <div>
          <button onClick={mesAnterior}>
            <span className=" cursor-pointer text-gray-600 mx-2 ml-10">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-light/24/circled-chevron-left.png"
                alt="circled-chevron-left"
              />
            </span>
          </button>
          <button onClick={proximoMes}>
            <span className="cursor-pointer text-gray-600 mx-2 ">
              <img
                width="24"
                height="24"
                style={{}}
                src="https://img.icons8.com/forma-light/24/circled-chevron-right.png"
                alt="circled-chevron-left"
              />
            </span>
          </button>
          </div>
          
        </header>
        <div className="grid grid-cols-7 grid-rows-6">
          {mesAtual[0].map((dia, idx) => (
            <span key={idx} className="text-sm py-1 text-center">
              {dia.format('dd').charAt(0)}
            </span>
          ))}
          {mesAtual.map((linha, idx) => (
            <React.Fragment key={idx}>
              {linha.map((dia, idxDia) => (
                <button onClick={()=>{setCalendarioPequenoMes(mesAtualIdx);
                setDiaEscolhido(dia)
                }}
                 key={idxDia} className={`py-1 w-full ${getDiaClass(dia)} `}>
                  <span className="text-sm">
                    {dia.format('D')}
                  </span>
                </button>
              ))} 
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}