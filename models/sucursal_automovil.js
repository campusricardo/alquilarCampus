import { Schema, model } from "mongoose";

const sucursalAutomovil = new Schema({
	ID_Sucursal: {
		type: Schema.Types.ObjectId,
		ref: "sucursales",
		required: true,
		trim: true,
	},
	ID_Automovil: {
		type: Schema.Types.ObjectId,
		ref: "automoviles",
		required: true,
		trim: true,
	},
	Cantidad_Disponible: {
		type: Number,
		required: true,
		trim: true,
		default: 1,
	},
});

const SucursalAutomovil = model("sucursal_automoviles", sucursalAutomovil);
export default SucursalAutomovil;