
const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({message:'Obtener algo'})
})

router.post('/', (req, res)=>{
    res.status(201).json({message:'Crear usuario'})
})

router.put('/:id', (req, res)=>{
    res.status(200).json({message:`Modificar la tarea número ${req.params.id}`})
})


module.exports = router