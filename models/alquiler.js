const { Schema, model }  = require("mongoose");


const alquiler = Schema({
	ID_Cliente: {
		type: Schema.Types.ObjectId,
		ref: "clientes",
		required: true,
		trim: true,
	},
	ID_Automovil: {
		type: Schema.Types.ObjectId,
		ref: "automoviles",
		required: true,
		trim: true,
	},
	Fecha_Inicio: {
		type: Date,
		require: true,
	},
	Fecha_Fin: {
		type: Date,
		require: true,
	},
	Costo_Total: {
		type: Number,
		require: true,
	},
	Estado: {
		type: Boolean,
		default: true,
		require: true,
	},
});

const Alquiler = model("alquileres", alquiler);
module.exports =  Alquiler;