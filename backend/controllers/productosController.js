const asyncHandler = require(express-async-handler)

const obtenerProductos = asyncHandler ( async (req, res) => {
    res.status(200).json({message:'Obtenemos los productos'})
})

const crearProductos = asyncHandler ( async (req, res) => {
    if(!req.body.nombre){
        res.status(400)
        throw new Error ("Hace falta el nombre del producto")
    }
    
    res.status(200).json({message:'Producto creado'})
})

const eliminarProductos = asyncHandler ( async (req, res) => {
    if(!req.params.id){
        res.status(400)
        throw new Error ("Hace falta el id del producto para poder eliminarlo")
    }
    
    res.status(200).json({message:'Producto eliminado'})
})

const modificarProductos = asyncHandler ( async (req, res) => {
    if(!req.params.id){
        res.status(400)
        throw new Error ("Hace falta el id del producto para poder actualizarlo")
    }
    
    res.status(200).json({message:'Producto actualizado'})
})


module.exports = {
   obtenerProductos,
   crearProductos,
   modificarProductos,
   eliminarProductos
}