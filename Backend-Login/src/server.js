
const express = require('express');
const rotas = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.get('/', (req, res) => {
    res.send("fala kapela");
})

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`o servidor está rodando na porta ${PORTA}`);
});