const Empleado = require('../models/empleado.js');
const sucursalAutomovil = require('../models/sucursal_automovil.js');
const Reserva = require('../models/reserva.js');
const Alquiler = require('../models/alquiler.js');
const RegistroDevolucion = require('../models/registro_devolucion.js');
const RegistroEntrega = require('../models/registro_entrega.js');
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
    
const postSucursalAutomovil = async(req, res) => {
    
    try {
        const {ID_Sucursal, ID_Automovil, Cantidad_Disponible} = req.body;
        const sucAutomovil = new sucursalAutomovil(req.body);
        const verify = await sucursalAutomovil.find({ID_Sucursal, ID_Automovil});
        console.log(verify);
        if(!verify) {
        await sucAutomovil.save();
        res.json({
            message: "Ya se envio"
        })
    
        }
        res.json({
            message: "Este automovil ya esta en la socursal"
        })
    
    } catch (error) {
        console.log(error);
        throw new Error;
    }

};

const postReservas = async(req, res) => {
    try {
        const {ID_Cliente, ID_Automovil, Fecha_Inicio, Fecha_Fin} = req.body;
        const createReserva = new Reserva({ID_Cliente, ID_Automovil,Fecha_Inicio: new Date(Fecha_Inicio), Fecha_Fin: new Date(Fecha_Fin)});
        await createReserva.save();
        res.json({message: "Reserva Creada"})
    } catch (error) {
        console.log(error);
        throw new Error;
    }

};

const deleteReserva = async (req, res) => {
    try {
        const {id} = req.params;

        const deleteReserva = await Reserva.findByIdAndUpdate(id,{Estado: false});

        res.json({
            message: 'Reserva Eliminada Exitosamente'
        });
    } catch (error) {
    console.log(error);
    throw new Error;
    }

};

const postAliquiler = async (req, res ) => {
    try {
        const {ID_Cliente, ID_Automovil, Fecha_Inicio, Fecha_Fin, Costo_Total} = req.body;

        const createAlquiler = new Alquiler({ID_Cliente, ID_Automovil, Fecha_Inicio: new Date(Fecha_Inicio), Fecha_Fin: new Date(Fecha_Fin), Costo_Total });

        await createAlquiler.save();
        res.json({
            result: createAlquiler
        })

    } catch (error) {
        console.log(error);
        throw new Error;
    }
}

const deleteAlquiler = async (req, res ) => {
    try {
        const {id} = req.params;

        const deleteReserva = await Alquiler.findByIdAndUpdate(id,{Estado: false});

        res.json({
            message: 'Alquiler Eliminada Exitosamente'
        });
    } catch (error) {
    console.log(error);
    throw new Error;
    }
};

const postDevolucion = async( req, res) => {
try {
    const {ID_Alquiler, ID_Empleado, Fecha_Devolucion, Combustible_Devuelto, Kilometraje_Devuelto, Monto_Adicional} = req.body;
    const newDevolucion = new RegistroDevolucion({ID_Alquiler, ID_Empleado, Fecha_Devolucion: new Date(Fecha_Devolucion), Combustible_Devuelto, Kilometraje_Devuelto, Monto_Adicional});
    await newDevolucion.save();
    res.json({
        message: "Devolucion Guardada con exito"
    })

} catch (error) {
    console.log(error);
    throw new Error;
}

};

const postEntrega = async( req, res) => {
    try {
    const {ID_Alquiler, ID_Empleado, Fecha_Entrega, Combustible_Entregado, Kilometraje_Entregado} = req.body;
    const newEntrega = new RegistroEntrega({ID_Alquiler, ID_Empleado, Fecha_Entrega: new Date(Fecha_Entrega), Combustible_Entregado, Kilometraje_Entregado});
    await newEntrega.save();
    res.json({
        message: "Entrega Guardada con exito"
    })
    } catch (error) {
        console.log(error);
        throw new Error;
    }
};

module.exports = {
    loguearEmpleado,
    postSucursalAutomovil,
    postReservas,
    deleteReserva,
    postAliquiler,
    postDevolucion,
    postEntrega,
    deleteAlquiler
}