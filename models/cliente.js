import { Schema, model } from "mongoose";

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
		type: Number,
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
export default Cliente;