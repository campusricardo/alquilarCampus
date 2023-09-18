const { Schema, model }  = require("mongoose");

const registroEntrega = new Schema({
	ID_Alquiler: {
		type: Schema.Types.ObjectId,
		ref: "alquileres",
		required: true,
		trim: true,
	},
	ID_Empleado: {
		type: Schema.Types.ObjectId,
		ref: "empleados",
		required: true,
		trim: true,
	},
	Fecha_Entrega: {
		type: Date,
		require: true,
		trim: true,
	},
	Combustible_Entregado: {
		type: Number,
		require: true,
		trim: true,
	},
	Kilometraje_Entregado: {
		type: Number,
		require: true,
		trim: true,
	},
});
const RegistroEntrega = model("registro_entrega", registroEntrega, "registro_entrega");
module.exports = RegistroEntrega;