const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/usuarios', require('./routes/usuariosRoutes'))
app.use('/api/productos', require('./routes/productosRoutes'))
app.use('/api/pedidos', require('./routes/pedidosRoutes'))

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`))  