const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Empleado = require('../models/empleado.js');



const validateJWT = async(  req = request, res = response, next) => {

    const token = req.header('jwt');


    
    if ( !token ) {
        return res.status(401).json({
            msg: 'There is no token in the request'
        });
    }

    try {
    
        const {uid} = jwt.verify( token, process.env.SECRET_OR_PRIVATE_KEY );

         const empleado = await Empleado.findById(uid );

        if( !empleado ) {
            return res.status(401).json({
                msg: 'This token has expired'
            })
        } 


        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }


}
module.exports = {
    validateJWT
}