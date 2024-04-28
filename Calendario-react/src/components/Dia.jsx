// components --> Dia.jsx
import dayjs from "dayjs";
import PropTypes from "prop-types";

function Dia({ dia, linhaIdx }) {
  function obterDiaAtualClass() {
    return dia.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {linhaIdx == 0 && (
          <p className="text-sm mt-1">{dia.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${obterDiaAtualClass()}`}>
          {dia.format("DD")}
        </p>
      </header>
    </div>
  );
}

Dia.propTypes = {
  dia: PropTypes.object.isRequired,
};

export default Dia;
