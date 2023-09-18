import { Schema, model } from "mongoose";

const registroDevolucion = new Schema({
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
	Fecha_Devolucion: {
		type: Date,
		require: true,
		trim: true,
	},
	Combustible_Devuelto: {
		type: Number,
		require: true,
		trim: true,
	},
	Kilometraje_Devuelto: {
		type: Number,
		require: true,
		trim: true,
	},
	Monto_Adicional: {
		type: Number,
		require: true,
		trim: true,
	},
});
const RegistroDevolucion = model("registro_devolucion", registroDevolucion, "registro_devolucion");
export default RegistroDevolucion;