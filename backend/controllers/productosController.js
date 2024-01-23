const asyncHandler = require('express-async-handler')
const Producto = require('../model/productosModel')


const obtenerProductos = asyncHandler ( async (req, res) => {
    if(req.usuario.esAdmin){
        const productos = await Producto.find()
        res.status(200).json({productos})
    }    
    
})

const crearProductos = asyncHandler ( async (req, res) => {
    if(req.usuario.esAdmin){
        if(!req.body.nombre){
            res.status(400)
            throw new Error ("Hace falta el nombre del producto")
        }
        const producto = await Producto.create({
            nombre: req.body.nombre
        })
    
        res.status(201).json(req.usuario) 
    }else{
        res.status(400)
        throw new Error("No tienes permiso")
    }
})

const eliminarProductos = asyncHandler ( async (req, res) => {
    if(req.usuario.esAdmin){
        const producto = await Producto.findById(req.params.id)
        if(!producto){
            res.status(400)
            throw new Error('El producto no fue encontrado')
        } 

        await Producto.findByIdAndDelete(req.params.id)

        res.status(200).json({message:`Producto ${producto} eliminado`})
    }    
})

const modificarProductos = asyncHandler ( async (req, res) => {
    if(req.usuario.esAdmin){
        const producto = await Producto.findById(req.params.id)
        if(!producto){
        res.status(400)
        throw new Error('El producto no fue encontrado')
        }
        const productoUpdated = await Producto.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json({productoUpdatedUpdated})
    }    
})


module.exports = {
   obtenerProductos,
   crearProductos,
   modificarProductos,
   eliminarProductos
}