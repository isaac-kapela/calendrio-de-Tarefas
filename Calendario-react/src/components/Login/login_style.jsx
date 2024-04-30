import styled  from "styled-components";

export const LoginContainer = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background-color: #D9D9D9;
  }

  .main {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background: red;
  }

  .login_direita {
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 5%;
  }

  .login_esquerda {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    flex: 1;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .login_esquerda img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .formulario label {
    padding-bottom: 10px;
    margin-top: 10px;
    font-weight: 600;
    color: #831C21;
  }

  .formulario {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
  }

  .formulario input {
    flex: 1;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #FFFFFF;
    color: #666666;
    font-size: 12px;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .invalida {
    color: #f10707;
  }

  .botoes {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .home button {
    background-color: #831C21;
    width: 100%;
    outline: none;
    border: none;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: medium;
    cursor: pointer;
  }

  .home:hover {
    background-color: #831C21;
  }

  .home a {
    list-style: none;
  }

  .icons {
    position: relative;
    width: 100%;
  }

  .icons i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #808080;
    padding-bottom: 10px;
  }

  .icons input {
    padding-right: 30px;
    padding-left: 10px;
    align-items: center;
    display: flex;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    color: #808080;
  }

  .icons input::placeholder {
    color: #808080;
  }

  @media only screen and (max-width: 912px) {
    .formulario {
      width: 100%;
    }
    
    .login_esquerda {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .login_esquerda {
      display: none;
    }

    .login_direita {
      margin: 5%;
      margin-top: 20%;
    }
  }

  @keyframes flip {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
