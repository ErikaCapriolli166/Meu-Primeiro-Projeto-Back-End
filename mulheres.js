const express = require('express')
const router = express.Router()

const app =  express()
const porta = 3333

const mulheres = [
    {
        nome: 'Erika Capriolli',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Aprendiz de desenvolvedora',
    },
    {
        nome: 'Simara',
        imagem:'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora',
    },
    {
        nome: 'Nina',
        imagem:'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antiracista',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)