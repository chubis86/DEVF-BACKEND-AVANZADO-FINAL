const asyncHandler = require(express-async-handler)

const verPedido = asyncHandler ( async (req, res) => {
    res.status(200).json({message:'Ver pedidos'})
 })

const crearPedido = asyncHandler (async (req, res) => {
    res.status(201).json({message:'Crear pedido'})
 })

 const eliminarPedido = asyncHandler (async (req, res) => {
    res.status(201).json({message:'Eliminar pedido'})
 })

module.exports = {
   verPedido,
   crearPedido,
   eliminarPedido
}