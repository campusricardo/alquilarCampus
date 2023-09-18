const Empleado = require('../models/empleado.js');
const {generateJWT} = require('../helpers/generateJWT.js');

const loguearEmpleado = async(req , res ) => {
    
        try {
        const {nombre, dni} = req.body;
            
            const empleado = await Empleado.findOne({Nombre: nombre});
    
            if (!empleado){
                return res.status(400).json({
                    msg:"empleado do not exist in the database"
                })
            }
    
            if ( dni === empleado.DNI) {
                const token = await generateJWT(empleado.id);
                res.json({
                    empleado,
                    token
                 });
            }
            res.json({
                message: "Password Incorrect"
            })
            
        } catch (error) {
            console.log(error);
            return res.json({
                msg:"Contact Technical Service"
            })
        }
}
    

module.exports = {
    loguearEmpleado
}