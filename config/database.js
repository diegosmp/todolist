const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/todolist', {directConnection:true})
    .then(() => console.log('Conectado com o banco de dados!'))
    .catch((err) => console.error(err))