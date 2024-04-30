//routes.js
const express = require('express');
const rotas = express.Router();

const usuarios =[
    {
    id: 1,
    nome: "ciclano",
    email: "ciclano@gmail.com",
    senha: "123456",
     },
    {
        id: 2,
        nome: "fulano",
        email: "fulano@gmail.com",
        senha: "123456",
    },
    {
        id: 3,
        nome: "beltrano",
        email: "beltrano@gmail.com",
        senha: "123456",
    },
];

rotas.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if(usuario){
        return res.send(usuario);
    }else{
      return  res.status(401).send("usuário ou senha inválidos");
    }
});

rotas.get('/usuarios', (req, res) => {
    res.send(email);
});

module.exports = rotas;


