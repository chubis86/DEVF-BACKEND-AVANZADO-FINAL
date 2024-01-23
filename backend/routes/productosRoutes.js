const express = require('express')
const router = express.Router()
const { obtenerProductos, crearProductos, modificarProductos, eliminarProductos } = require('../controllers/productosController')
const { protect } = require('../middleware/authMiddleware')


router.get('/', protect, obtenerProductos)

router.post('/', protect, crearProductos)

router.put('/:id', protect, modificarProductos)

router.delete('/:id', protect, eliminarProductos)



module.exports = router