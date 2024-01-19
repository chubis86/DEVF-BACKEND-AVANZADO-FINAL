const mongoose= require('mongoose')

const tareaSchema = mongoose.Schema({

    productos: {
        type: String,
        required:[true, "Por favor teclea los productos"]
    },

    
},{
    timestamps: true
})

module.exports = mongoose.model('Pedido', tareaSchema)
