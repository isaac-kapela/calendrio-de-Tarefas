import  { useState } from 'react';
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
                  <a className="link-social-media" href="https://www.facebook.com/isaac.kapela.1/photos_by?locale=pt_BR">
                    <li className="item-social-media">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                    </li>
                  </a>
                  <a className="link-social-media" href="https://kapela.vercel.app/">
                    <li className="item-social-media">
                    <img width="64" height="64" src="https://img.icons8.com/arcade/64/portfolio.png" alt="portfolio"/>
                    </li>
                  </a>
                  <a className="link-social-media" href="https://www.linkedin.com/in/isaac-kapela-a75141250/">
                    <li className="item-social-media">
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                    </li>
                  </a>
                </ul>
              </div>
              
              <form className="form">
                <label className="label-input" htmlFor="">
                <img  width="24" height="24" src="https://img.icons8.com/material-sharp/24/new-post.png" alt="new-post"/>                <input type="text" placeholder="Digite o seu email" value={email} onChange={(e) => [setEmail(e.target.value), setErro("")]}/>
                </label>

                <label className="label-input" htmlFor="">
                <img  width="24" height="24" src="https://img.icons8.com/material-sharp/24/new-post.png" alt="new-post"/>
                  <input type="email" placeholder="Comfirmar email" value={emailConfri} onChange={(e) => [setEmailConfri(e.target.value), setErro("")]} />
                </label>

                <label className="label-input " htmlFor="">
                <img  width="32" height="32" src="https://img.icons8.com/stamp/32/password.png" alt="password"/>
                  <input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setErro("")]} />
                </label>

                <span className='text-red-500'>{erro}</span>

                <button className="btn btn-second" type='submit' onClick={handleCadastro}>Registrar-se</button>
              </form>
            </div>
          </div>
          <div className="content second-content">
            <div className="first-column">
              <h2 className="title title-primary">Olá, amigo!</h2>
              <p className="description description-primary">Digite seus dados pessoais</p>
              <p className="description description-primary">e seja bem vindo</p>
              <button id="signup" className="btn btn-primary" onClick={handleCliqueCadastro}>Cadastrar-se</button>
            </div>
            <div className="second-column">
              <h2 className="title title-second">Entrar no gerenciador de tarefas</h2>
              <div className="social-media">
                <ul className="list-social-media">
                  <a className="link-social-media" href="https://www.facebook.com/isaac.kapela.1/photos_by?locale=pt_BR">
                    <li className="item-social-media">
                    <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                    </li>
                  </a>
                  <a className="link-social-media" href="https://kapela.vercel.app/">
                    <li className="item-social-media">
                    <img width="30" height="30" src="https://img.icons8.com/arcade/64/portfolio.png" alt="portfolio"/>
                    
                    </li>
                  </a>
                  <a className="link-social-media" href="https://www.linkedin.com/in/isaac-kapela-a75141250/">
                    <li className="item-social-media">
                    <img width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                    </li>
                  </a>
                </ul>
              </div>
            
              <form className="form">

                <label className="label-input">
                  <i className="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => [setEmail(e.target.value), setErro("")]} />
                </label>

                <label className="label-input">
                  <i className="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setErro("")]} />
                </label>
                <span className='text-red-500'>{erro}</span>
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
