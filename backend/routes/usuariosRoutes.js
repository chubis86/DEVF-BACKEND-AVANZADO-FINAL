const express = require('express')
const router = express.Router()
const { login, registrarUsuario } = require('../controllers/usuariosController')

router.post('/login', login)

router.post('/registrar', registrarUsuario)



module.exports = router