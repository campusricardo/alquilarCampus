const Sucursal = require("../models/sucursal.js");
const automovilesSucursal = require("../models/sucursal_automovil.js");

// 8. Mostrar la cantidad total de automóviles disponibles en cada sucursal.

const automovilesenSucursal = async (req, res) => {
  try {
    const automoviles = await automovilesSucursal.aggregate([
      {
        $lookup: {
          from: "sucursales",
          localField: "ID_Sucursal",
          foreignField: "_id",
          as: "sucursales",
        },
      },
      {
        $lookup: {
          from: "automoviles",
          localField: "ID_Automovil",
          foreignField: "_id",
          as: "automoviles",
        },
      },
      { $unwind: "$sucursales" },
      { $unwind: "$automoviles" },
      {
        $project: {
          _id: 0,
          Fecha_Inicio: 1,
          Nombre: "$clientes.Nombre",
          Apellido: "$clientes.Apellido",
        },
      },
    ]);

    res.json(automoviles);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

module.exports = {
  automovilesenSucursal,
};
