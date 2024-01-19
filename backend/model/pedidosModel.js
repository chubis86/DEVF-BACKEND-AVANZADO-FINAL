const mongoose= require('mongoose')

const tareaSchema = mongoose.Schema({

    usuario: {
        type: String,
        required:[true, "Por favor teclea el usuario"]
    },

    productos: {
        type: String,
        required:[true, "Por favor teclea los productos"]
    }
    

    
},{
    timestamps: true
})

module.exports = mongoose.model('Pedido', tareaSchema)
