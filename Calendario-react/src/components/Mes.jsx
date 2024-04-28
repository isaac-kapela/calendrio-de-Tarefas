//components --> Mes.jsx
import React from "react";
import PropTypes from "prop-types";
import Dia from "./Dia";

function Mes({ mes }) {
  return (
    <>
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {mes.map((linha, i) => (
          <React.Fragment key={i}>
            {linha.map((dia, idx) => (
              <Dia dia={dia} key={idx} linhaIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

Mes.propTypes = {
  mes: PropTypes.array.isRequired,
};

export default Mes;
