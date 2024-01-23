const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Usuario = require('../model/usuariosModel')

const login = asyncHandler ( async (req, res) => {
    const {email, password} = req.body

    const usuario = await Usuario.findOne({email})
    if(usuario && (await bcrypt.compare(password, usuario.password))){
        res.status(200).json({
            _id : usuario.id,
            name: usuario.name,
            email: usuario.email,
            esAdmin: usuario.esAdmin,
            token: generarToken(usuario.id)
        })
    }else{
        res.status(400)
        throw new Error('Credenciales incorrectas')
    }
 })

 const registrarUsuario = asyncHandler ( async (req, res) => {
    const { nombre, email, password } = req.body
    if(!nombre || !email || !password){
        res.status(400)
        throw new Error("Faltan datos. Favor de verificar")
    }

    //Verificar si el usuario existe
    const usuarioExiste = await Usuario.findOne({email})
    if(usuarioExiste){
        res.status(400)
        throw new Error ("Ese usuario ya existe")
    }

    //hash al password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Creamos el nuevo usuario en la base
    const usuario = await Usuario.create({
        nombre, 
        email,
        password: hashedPassword
    })

    if(usuario){
        res.status(201).json({
            _id: usuario._id,
            nombre: usuario.name,
            email: usuario.email,
            admin: usuario.esAdmin
        })
    }else{
        res.status(400)
        throw new Error ("No se pudieron guardar los datos")
    }
})

const generarToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })
}

module.exports = {
   login,
   registrarUsuario
}