const { Schema, model }  = require("mongoose");

const empleado = new Schema({
	Nombre: {
		type: String,
		required: true,
		trim: true,
	},
	Apellido: {
		type: String,
		required: true,
		trim: true,
	},
	DNI: {
		type: String,
		required: true,
		trim: true,
	},
	Direccion: {
		type: String,
		required: true,
		trim: true,
	},
	Telefono: {
		type: Number,
		require: true,
		trim: true,
	},
	Cargo: {
		type: String,
		require: true,
		trim: true,
	},
});

const Empleado = model("empleados", empleado);

module.exports =  Empleado;