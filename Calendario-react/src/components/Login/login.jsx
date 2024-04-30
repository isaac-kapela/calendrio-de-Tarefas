// login.jsx
import axios from "axios";
import * as S from "./login_style.jsx";
import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, senha }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      console.log(response.data);
      onLoginSuccess(); // Chame a função de sucesso do login aqui
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao tentar fazer login, tente novamente mais tarde");
      } else if (error?.response?.status === 401) {
        setError("Email ou senha inválidos");
      }
    }
  };

  return (
    <>
      <S.LoginContainer>
        <div className="main">
          <div className="login_esquerda">
            <img
              src="/public/assets/carro ayrton.jpg"
              className="img_login"
              alt="Pista de corrida"
            />
          </div>

          <div className="login_direita">
            <div className="container">
              <div className="logo">
                <img
                  className="img-logo"
                  src="/public/assets/logo_quadrada_-_fundo_transparente.png"
                  alt="Logo"
                  width="250px"
                  height="230px"
                />
              </div>

              <div className="dados">
                <form action="">
                  <div className="formulario">
                    <label htmlFor="Email">Digite o seu e-mail</label>
                    <div className="icons">
                      <i className="fa fa-envelope"></i>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="formulario">
                    <label htmlFor="Senha">Digite a sua senha</label>
                    <div className="icons">
                      <i className="fa fa-lock"></i>
                      <input
                        onChange={(e) => setSenha(e.target.value)}
                        type="'password'"
                        name="senha"
                        placeholder="Senha"
                        required
                      />
                    </div>
                  </div>
                </form>

                <div className="botoes">
                  <div onClick={(e) => handleLogin(e)} className="btn_login">
                    <button type="submit">Entrar</button>
                    <p className="text-center text-red-700 mt-2">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.LoginContainer>
    </>
  );
}
