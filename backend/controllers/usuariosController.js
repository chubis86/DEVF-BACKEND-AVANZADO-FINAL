const asyncHandler = require(express-async-handler)

const login = asyncHandler ( async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error ("Hace falta email y/o password")
    }
    res.status(200).json({message:'Logueo'})
 })

 const registrarUsuario = asyncHandler ( async (req, res) => {
    if(!req.body.email || !req.body.password || !req.body.nombre){
        res.status(400)
        throw new Error ("Hacen faltan valores")
    }
    res.status(200).json({message:'Usuario registrado'})
})


module.exports = {
   login,
   registrarUsuario
}