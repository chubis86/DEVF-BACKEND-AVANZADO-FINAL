const mongoose= require('mongoose')

const tareaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required:[true, "Por favor teclea el nombre del producto"]
    }

    
},{
    timestamps: true
})

module.exports = mongoose.model('Producto', tareaSchema)
