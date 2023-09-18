const Cliente = require('../models/cliente.js');

 const existEmail = async( email = '' ) => {
    const Email = await Cliente.findOne({Email: email});
    if(Email){
        throw new Error(`The email: ${ email }, is already registeres`);
    }
 }


module.exports = {
    existEmail,


}