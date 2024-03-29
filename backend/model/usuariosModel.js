const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor teclea tu nombre']
    },
    email:{
        type: String,
        required: [true, 'Por favor teclea tu email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Por favor teclea tu password']
    },
    esAdmin:{
        type: Boolean,
        default: false
    }
},
{
    timesstamp:true
}
)

module.exports = mongoose.model('Usuario', usuarioSchema)