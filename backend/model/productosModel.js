const mongoose= require('mongoose')

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required:[true, "Por favor teclea el nombre del producto"]
    }

    
},{
    timestamps: true
})

module.exports = mongoose.model('Producto', productoSchema)
