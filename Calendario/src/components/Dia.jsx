// import React from 'react';
import PropTypes from 'prop-types';

function Dia({dia}) {
  return (
    <div>
      {dia.format()}
    </div>
  )
}

Dia.propTypes = {
  dia: PropTypes.object.isRequired,
};

export default Dia;