const { Schema, model }  = require("mongoose");

const cliente = new Schema({
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
	Email: {
		type: String,
		required: true,
		trim: true,
	},
});

const Cliente = model("clientes", cliente);

module.exports = Cliente;