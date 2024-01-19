const login = (req, res) => {
    res.status(200).json({message:'Logueo'})
 }

const registrarUsuario = (req, res) => {
    res.status(201).json({message:'Registrar Usuario'})
 }


module.exports = {
   login,
   registrarUsuario
}