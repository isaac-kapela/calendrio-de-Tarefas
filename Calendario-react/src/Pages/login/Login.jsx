import React, { useState } from 'react';
import * as S from "./Login_style";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


function Login() {
  const [fazerLogin, setFazerLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [emailConfri, setEmailConfri] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navegar = useNavigate();

  const {login} = useAuth();
  const {cadastro} = useAuth();

  const handleEntrar = () => {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }
    const res = login(email, senha); 

    if (res) {
      setErro(res);
      return;
    }
    navegar("/home")
  }

  const handleCadastro = () => {
    if(!email || !emailConfri || !senha){
      setErro('Preencha todos os campos');
      return;
    } else if(email !== emailConfri){
      setErro('Os emails não são iguais');
      return;
    }

    const res = cadastro(email, senha);
    if(res){
      setErro(res);
      return;
    } 
    alert("Usuario cadastrado com sucesso")
    navegar("/")
  }
  const handleCliqueLogin = () => {
    setFazerLogin(true);
  };

  const handleCliqueCadastro = () => {
    setFazerLogin(false);
  };

  return (
    <>
      <S.LoginContainer>
        <div className={`container ${fazerLogin ? 'sign-in-js' : 'sign-up-js'}`}>
          <div className="content first-content">
            <div className="first-column">
              <h2 className="title title-primary">Bem-vindo de volta!</h2>
              <p className="description description-primary">Para se manter conectado conosco</p>
              <p className="description description-primary">faça login com suas informações pessoais</p>
              <button id="signin" className="btn btn-primary" onClick={handleCliqueLogin}>Entrar</button>
            </div>
            <div className="second-column">
              <h2 className="title title-second">Criar Conta</h2>
              <div className="social-media">
                <ul className="list-social-media">
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-facebook-f"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-google-plus-g"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-linkedin-in"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <p className="description description-second">ou use seu e-mail para registrar-se:</p>
              <form className="form">
                <label className="label-input" htmlFor="">
                  <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Digite o seu email" value={email} onChange={(e) => [setEmail(e.target.value), setErro("")]}/>
                </label>

                <label className="label-input" htmlFor="">
                  <i className="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Comfirmar email" value={emailConfri} onChange={(e) => [setEmailConfri(e.target.value), setErro("")]} />
                </label>

                <label className="label-input" htmlFor="">
                  <i className="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setErro("")]} />
                </label>

                <span>{erro}</span>

                <button className="btn btn-second" type='submit' onClick={handleCadastro}>Registrar-se</button>
              </form>
            </div>
          </div>
          <div className="content second-content">
            <div className="first-column">
              <h2 className="title title-primary">Olá, amigo!</h2>
              <p className="description description-primary">Digite seus dados pessoais</p>
              <p className="description description-primary">e comece a jornada conosco</p>
              <button id="signup" className="btn btn-primary" onClick={handleCliqueCadastro}>Cadastrar-se</button>
            </div>
            <div className="second-column">
              <h2 className="title title-second">Entrar no Desenvolvedor</h2>
              <div className="social-media">
                <ul className="list-social-media">
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-facebook-f"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-google-plus-g"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-linkedin-in"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <p className="description description-second">ou use sua conta de e-mail:</p>
              <form className="form">

                <label className="label-input">
                  <i className="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => [setEmail(e.target.value), setErro("")]} />
                </label>

                <label className="label-input">
                  <i className="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setErro("")]} />
                </label>
                <span>{erro}</span>
                <button className="btn btn-second" onClick={handleEntrar}>Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </S.LoginContainer>
    </>
  );
}

export default Login;
