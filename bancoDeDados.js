const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBandoDeDados() {
    try {
        console.log('Conexão com banco de dados iniciou')

        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Conexão com o bando de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBandoDeDados