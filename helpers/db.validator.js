const Cliente = require('../models/cliente.js');
const Sucursal = require('../models/sucursal.js');
const Automovil = require('../models/automovil.js');
const Alquiler = require('../models/alquiler.js');
const Empleado = require('../models/empleado.js');

 const existEmail = async( email = '' ) => {
    const Email = await Cliente.findOne({Email: email});
    if(Email){
        throw new Error(`The email: ${ email }, is already registeres`);
    }
 }

 const existSucursal = async(ID_Sucursal = '') => {
    try {
        const sucursal = await Sucursal.findById(ID_Sucursal);
       if (!sucursal){
        throw new Error(`The sucursal do not exists`)
       }  
    } catch(error) {
        console.log(error);
        throw new Error;
    }

 };

 const existAutomovil = async(ID_Automovil = '') => {
    try {
        const automovil = await Automovil.findById(ID_Automovil);
       if (!automovil){
        throw new Error(`The automovil do not exists`);
       }  
    } catch(error) {
        console.log(error);
        throw new Error;
    }

 };

 const existCliente = async (ID_Cliente = '') => {
    try {
        const cliente = await Cliente.findById(ID_Cliente);
       if (!cliente){
        throw new Error(`The Cliente do not exists`);
       }  
    } catch(error) {
        console.log(error);
        throw new Error;
    }

 };

const existAlquiler = async (ID_Alquiler = '') => {

try {
    const findAlquiler = await Alquiler.find({_id: ID_Alquiler, Estado: true});
    if (findAlquiler.length === 0) {
        console.log('wtf is happening');
        throw new Error('Ese alquiler no existe');
    }

} catch (error) {
    console.log(error);
    throw new Error;
}

};

const existEmpleado = async (ID_Empleado = '') => {
    try {
        const findEmpleado = await Empleado.findById(ID_Empleado);
        console.log(findEmpleado);
        if (!findEmpleado) {
            throw new Error('Ese Empleado no existe');
        }
    
    } catch (error) {
        console.log(error);
        throw new Error;
    }
}

module.exports = {
    existEmail,
    existSucursal,
    existAutomovil,
    existCliente,
    existAlquiler,
    existEmpleado
}