const express = require('express')
const router = express.Router()
const { obtenerProductos, crearProductos, modificarProductos, eliminarProductos } = require('../controllers/productosController')

router.get('/', obtenerProductos)

router.post('/', crearProductos)

router.put('/:id', modificarProductos)

router.delete('/:id', eliminarProductos)



module.exports = router