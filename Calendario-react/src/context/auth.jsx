import { createContext } from "react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();
  useEffect(() => {
    const usuarioToken = localStorage.getItem("usuario_Token");
    const usuariosStorage = localStorage.getItem("usuarios_db");
    if (usuarioToken && usuariosStorage) {
      const hasUsuario = JSON.parse(usuariosStorage)?.filter(
        (usuario) => usuario.email === JSON.parse(usuarioToken).email
      );
      if (hasUsuario) setUsuario(hasUsuario[0]);
    }
  }, []);

  const login = (email, senha) => {
    const usuariosStorage = JSON.parse(localStorage.getItem("usuarios_db"));
    const hasUsuario = usuariosStorage?.filter(
      (usuario) => usuario.email === email
    );

    if (hasUsuario?.length) {
      if (hasUsuario[0].email === email && hasUsuario[0].senha === senha) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("usuario_Token", JSON.stringify({ email, token }));
        setUsuario({ email, senha });
        return;
      } else {
        return "E-mail ou senha inválidos!";
      }
    } else {
      return "Usuário não cadastrado!";
    }
  };

  const cadastro = (email, senha) => {
    const usuariosStorage = JSON.parse(localStorage.getItem("usuarios_db"));

    const hasUsuario = usuariosStorage?.filter(
      (usuario) => usuario.email === email
    );

    if (hasUsuario?.length) {
      return "Usuário já cadastrado!";
    }

    let novoUsuarios;
    if (usuariosStorage) {
      novoUsuarios = [...usuariosStorage, { email, senha }];
    } else {
      novoUsuarios = [{ email, senha }];
    }

    localStorage.setItem("usuarios_db", JSON.stringify(novoUsuarios));

    return;
  };

  const deslogar = () => {
    setUsuario(null);
    localStorage.removeItem("usuario_Token");
    
  };

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <AuthContext.Provider value={{usuario, logado: !!usuario, login, cadastro, deslogar}} >{children}</AuthContext.Provider>;
};