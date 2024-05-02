import { Fragment } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
import Home from "../Pages/Home/Home";
import Erro from "../Pages/404-ERRO/NaoEcontrado";
import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";

export default function routes() {
    const Privado =({Item}) => {
        const { logado } = useAuth();
        return logado > 0 ? <Item /> : <Login />;
    };

    Privado.propTypes = {
      Item: PropTypes.elementType.isRequired,
    };

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Privado Item={Home} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Erro />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}