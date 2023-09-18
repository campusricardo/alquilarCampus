const { Schema, model }  = require("mongoose");


const automovil = new Schema({
	Marca: {
		type: String,
		required: true,
		trim: true,
	},
	Modelo: {
		type: String,
		required: true,
		trim: true,
	},
	Anio: {
		type: Number,
		require: true,
		trim: true,
	},
	Tipo: {
		type: String,
		require: true,
		trim: true,
	},
	Capacidad: {
		type: Number,
		require: true,
		trim: true,
	},
	Precio_Diario: {
		type: Number,
		require: true,
		trim: true,
	},
});
const Automovil = model("automoviles", automovil);

module.exports = Automovil;