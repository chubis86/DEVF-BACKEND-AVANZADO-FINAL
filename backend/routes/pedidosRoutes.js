const express = require('express')
const router = express.Router()
const { verPedido, crearPedido, eliminarPedido } = require('../controllers/pedidosController')

router.get('/', verPedido)

router.post('/', crearPedido)

router.delete('/:id', eliminarPedido)


module.exports = router