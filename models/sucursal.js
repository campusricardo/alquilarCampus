const { Schema, model }  = require("mongoose");


const sucursal = new Schema({
  Nombre: {
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
});

const Sucursal = model("sucursales", sucursal);
module.exports = Sucursal;