const sucursalAutomovil = require("../models/sucursal_automovil.js");
const Alquiler = require("../models/alquiler.js");
const mongoose = require("mongoose");
// 3. Obtener todos los automóviles disponibles para alquiler.

const getAutomovilesDisponibles = async (req, res) => {
  try {
    const automovilesDisponibles = await sucursalAutomovil.aggregate([
      {
        $lookup: {
          from: "automoviles",
          localField: "ID_Automovil",
          foreignField: "_id",
          as: "automoviles",
        },
      },
      {
        $unwind: "$automoviles",
      },
      {
        $project: {
          _id: 0,
          Modelo: "$automoviles.Modelo",
          Anio: "$automoviles.Anio",
        },
      },
    ]);

    res.json(automovilesDisponibles);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
// 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados.

const getAlquileresActivos = async (req, res) => {
  try {
    const alquileresActivos = await Alquiler.aggregate([
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
      },
      {
        $unwind: "$clientes",
      },
      {
        $project: {
          _id: 0,
          Fecha_Inicio: 1,
          Nombre: "$clientes.Nombre",
          Apellido: "$clientes.Apellido",
        },
      },
    ]);

    res.json({
      result: alquileresActivos,
    });
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

// 6. Obtener los detalles del alquiler con el ID_Alquiler específico.

const detallesAlquiler = async (req, res) => {
  try {
    const { id } = req.params;
    const getDetalles = await Alquiler.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "clientes",
          localField: "ID_Cliente",
          foreignField: "_id",
          as: "clientes",
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
      { $unwind: "$clientes" },
      { $unwind: "$automoviles" },
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
      result: getDetalles,
    });
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

module.exports = {
  getAutomovilesDisponibles,
  getAlquileresActivos,
  detallesAlquiler,
};
