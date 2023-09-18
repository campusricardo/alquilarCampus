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
		trim: true,
	},
	Fecha_Fin: {
		type: Date,
		require: true,
		trim: true,
	},
	Costo_Total: {
		type: Number,
		require: true,
		trim: true,
	},
	Estado: {
		type: Boolean,
		default: true,
		require: true,
		trim: true,
	},
});

const Alquiler = model("alquileres", alquiler);
module.exports =  Alquiler;