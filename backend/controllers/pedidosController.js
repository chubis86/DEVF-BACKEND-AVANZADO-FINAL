const verPedido = (req, res) => {
    res.status(200).json({message:'Ver pedidos'})
 }

const crearPedido = (req, res) => {
    res.status(201).json({message:'Crear pedido'})
 }

 const eliminarPedido = (req, res) => {
    res.status(201).json({message:'Eliminar pedido'})
 }

module.exports = {
   verPedido,
   crearPedido,
   eliminarPedido
}