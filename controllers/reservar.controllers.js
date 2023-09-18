// 5. Mostrar todas las reservas pendientes con los datos del cliente y elautomóvil reservado.

const Reservas = require("../models/reserva.js");
const reservasPendientes = async (req, res) => {
  const reservaPen = await Reservas.aggregate([
    {
      $match: {
        Estado: true,
      },
    },
    {
      $lookup: {
        from: "clientes",
        localField: "ID_Cliente",
        foreignField: "_id",
        as: "clientes",
      },
      $lookup: {
        from: "automoviles",
        localField: "ID_Automovil",
        foreignField: "_id",
        as: "automoviles",
      },
    },
    {
      $unwind: "$clientes",
      $unwind: "$automoviles",
    },
    {
      $project: {
        _id: 0,
        Fecha_Inicio: 1,
        Nombre: "$clientes.Nombre",
        Apellido: "$clientes.Apellido",
        Automovil: {
          Marca: "$automoviles.Marca",
          Modelo: "$automoviles.Modelo",
        },
      },
    },
  ]);

  res.json({
    result: reservaPen,
  });
};

module.exports = {
  reservasPendientes,
};
