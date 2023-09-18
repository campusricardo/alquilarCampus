const { Schema, model }  = require("mongoose");


const reserva = new Schema({
	ID_Cliente: {
		type: Schema.Types.ObjectId,
		ref: "clientes",
		required: true,
		trim: true,
	},
	ID_Automovil: {
		type: Schema.Types.ObjectId,
		ref: "sucursal_automovil",
		required: true,
		trim: true,
	},
	Fecha_Reserva: {
		type: Date,
		require: true,
		default: Date.now
	},
	Fecha_Inicio: {
		type: Date,
		require: true,
	},
	Fecha_Fin: {
		type: Date,
		require: true,
	},
	Estado: {
		type: Boolean,
		require: true,
		default: true,
	}
});

const Reserva = model("reservas", reserva);

module.exports = Reserva;