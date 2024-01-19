const asyncHandler = require(express-async-handler)
const Pedido = require('../model/pedidosModel')


const verPedido = asyncHandler ( async (req, res) => {
    const pedidos = await Pedido.find({usuario:req.usuario.id})
    res.status(200).json({message:'Ver pedidos'})
 })

const crearPedido = asyncHandler (async (req, res) => {
    if(!req.body.productos){
        res.status(400)
        throw new Error ("Hacen falta productos")
    }
    const pedido = await Pedido.create({
        usuario : req.usuario.id,
        productos: req.body.productos
        
    })
  
    res.status(201).json({pedido})
 })

 const eliminarPedido = asyncHandler (async (req, res) => {
    const pedido = await Pedido.findById(req.params.id)
    if(!pedido){
        res.status(400)
        throw new Error('El pedido no fue encontrado')
    } 

    await Pedido.findByIdAndDelete(req.params.id)

    res.status(200).json({message:`Pedido ${tarea} eliminado`})
 })

module.exports = {
   verPedido,
   crearPedido,
   eliminarPedido
}