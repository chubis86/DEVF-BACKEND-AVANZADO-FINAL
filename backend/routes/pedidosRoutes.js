const express = require('express')
const router = express.Router()
const { verPedido, crearPedido, eliminarPedido } = require('../controllers/pedidosController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, verPedido)

router.post('/', protect, crearPedido)

router.delete('/:id', protect, eliminarPedido)


module.exports = router