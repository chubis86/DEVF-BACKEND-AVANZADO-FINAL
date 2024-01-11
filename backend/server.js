const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

//Esto es para probar ya que lo correcto sería tener una carpeta de rutas y no todo en el archivo server.js
app.get('/api/tareas', (req, res)=>{
    res.status(200).json({message:'Obtener algo'})
})

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`))  